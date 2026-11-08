#!/usr/bin/env node
/*
 * KARTALOVIC LABS — static multilingual build (Node 18+, no dependencies).
 *
 *   node _i18n/build.mjs           generate every page + sitemap.xml
 *   node _i18n/build.mjs --check   exit 1 if a generated file is out of date
 *
 * Edit the sources, never the generated files:
 *   _i18n/translations.json    all UI strings, one block per language
 *   _i18n/templates/*.html     English page templates using data-i18n keys
 *
 * Output: English pages keep their existing URLs (/, /contact.html, ...);
 * German and Serbian pages are written to /de/ and /sr/. Each page gets its
 * own canonical URL and reciprocal hreflang links (incl. x-default).
 * Single-language pages (SINGLE_LANGUAGE_PAGES) get a canonical URL only.
 * Every page links css/style.css with ?v=<content hash>, so a CSS change
 * reaches visitors without waiting for the GitHub Pages cache to expire.
 * The _i18n folder is not published: Jekyll on GitHub Pages skips
 * directories that start with an underscore.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = join(ROOT, "_i18n");
const SITE = "https://kartaloviclabs.com";

const LANGUAGES = {
    en: { dir: "", htmlLang: "en", hreflang: "en", ogLocale: "en_US" },
    de: { dir: "de/", htmlLang: "de", hreflang: "de", ogLocale: "de_DE" },
    sr: { dir: "sr/", htmlLang: "sr-Latn", hreflang: "sr-Latn", ogLocale: "sr_RS" },
};
const DEFAULT_LANGUAGE = "en";

/* Indexable pages: template file -> path below the language root. */
const PAGES = [
    { file: "index.html", path: "" },
    { file: "contact.html", path: "contact.html" },
    { file: "privacy.html", path: "privacy.html" },
    { file: "impressum.html", path: "impressum.html" },
];

/* Pages written in one language only. They are not translations of one
   another, so they get no hreflang links. Their language switcher leads to
   the page for the same service in that language, else to its home page,
   and links marked data-service-page="<service>" point at them. */
const SINGLE_LANGUAGE_PAGES = [
    { file: "webdesign-vechta.html", language: "de", path: "webdesign-vechta.html", service: "web" },
    { file: "izrada-sajtova.html", language: "sr", path: "izrada-sajtova.html", service: "web" },
];

/* GitHub Pages serves /404.html for every missing URL, so there is one
   file; js/main.js picks its language from the URL at runtime. */
const NOT_FOUND = "404.html";

/* Strings js/main.js shows after load (menu label, form states). */
const RUNTIME_KEYS = [
    "menuOpen", "menuClose",
    "formSending", "formSuccess", "formError", "formSubmit",
];

const ATTRIBUTE_KEYS = {
    "data-i18n-content": "content",
    "data-i18n-alt": "alt",
    "data-i18n-aria-label": "aria-label",
    "data-i18n-placeholder": "placeholder",
};

const LOCAL_PAGE_LINK = /^\/(?:(contact|privacy|impressum)\.html)?(#[^"]*)?$/;


/* ---------------------------------------------------------------- utils */

class BuildError extends Error {}

function fail(message) {
    throw new BuildError(message);
}

function replaceOnce(html, pattern, replacement, label) {
    let count = 0;
    const result = html.replace(pattern, (...args) => {
        count += 1;
        return typeof replacement === "function" ? replacement(...args) : replacement;
    });
    if (count !== 1) fail(`${label}: expected exactly one match, found ${count}`);
    return result;
}

const escapeText = value =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const escapeAttribute = value =>
    escapeText(value).replace(/"/g, "&quot;");

const pageUrl = (language, path) => `${SITE}/${LANGUAGES[language].dir}${path}`;
const pageHref = (language, path) => `/${LANGUAGES[language].dir}${path}`;

/* Language -> path for the language switcher. */
const samePathEverywhere = path =>
    Object.fromEntries(Object.keys(LANGUAGES).map(code => [code, path]));

const servicePage = (service, language) =>
    SINGLE_LANGUAGE_PAGES.find(page => page.service === service && page.language === language);


/* ----------------------------------------------------------- validation */

function loadTranslations() {
    const translations = JSON.parse(readFileSync(join(SOURCE, "translations.json"), "utf8"));
    const reference = Object.keys(translations[DEFAULT_LANGUAGE] || {});

    for (const language of Object.keys(LANGUAGES)) {
        const dict = translations[language];
        if (!dict) fail(`translations.json: missing language "${language}"`);

        const missing = reference.filter(key => !(key in dict));
        const extra = Object.keys(dict).filter(key => !reference.includes(key));
        const empty = Object.keys(dict).filter(key => typeof dict[key] !== "string" || !dict[key].trim());

        if (missing.length) fail(`translations.json: "${language}" is missing ${missing.join(", ")}`);
        if (extra.length) fail(`translations.json: "${language}" has unknown keys ${extra.join(", ")}`);
        if (empty.length) fail(`translations.json: "${language}" has empty values for ${empty.join(", ")}`);
    }

    return translations;
}

function usedKeys(html) {
    const keys = new Set();
    for (const match of html.matchAll(/\sdata-i18n(?:-[a-z-]+)?="([^"]+)"/g)) keys.add(match[1]);
    return keys;
}


/* ------------------------------------------------------- transformations */

function translateText(html, dict, label) {
    const attributeCount = (html.match(/\sdata-i18n="/g) || []).length;
    let replaced = 0;

    const result = html.replace(
        /(<([a-z0-9]+)\b[^>]*?\sdata-i18n="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/g,
        (match, open, tag, key, inner, close) => {
            replaced += 1;
            const lead = inner.match(/^\s*/)[0];
            const trail = inner.slice(lead.length).match(/\s*$/)[0];
            return open + lead + escapeText(dict[key]) + trail + close;
        }
    );

    // Elements with child markup cannot be translated safely.
    if (replaced !== attributeCount) {
        fail(`${label}: ${attributeCount - replaced} data-i18n element(s) contain nested markup`);
    }
    return result;
}

function translateAttributes(html, dict, label) {
    for (const [source, target] of Object.entries(ATTRIBUTE_KEYS)) {
        const tagPattern = new RegExp(`<[a-z][^>]*\\s${source}="([^"]+)"[^>]*>`, "g");
        html = html.replace(tagPattern, (tag, key) => {
            const attributePattern = new RegExp(`(\\s${target}=")[^"]*(")`);
            if (!attributePattern.test(tag)) fail(`${label}: ${source}="${key}" without ${target}`);
            return tag.replace(attributePattern, `$1${escapeAttribute(dict[key])}$2`);
        });
    }
    return html;
}

function localizeLinks(html, language) {
    const { dir } = LANGUAGES[language];
    if (!dir) return html;

    return html.replace(/\shref="([^"]*)"/g, (match, href) => {
        const local = href.match(LOCAL_PAGE_LINK);
        if (!local) return match;
        const [, page, hash = ""] = local;
        return ` href="/${dir}${page ? `${page}.html` : ""}${hash}"`;
    });
}

/* Links marked data-service-page="<service>" sit on their own line; they
   point at that service's page in the current language, and languages
   without one drop the whole line. */
const SERVICE_LINK = /\n[ \t]*<a\b[^>]* data-service-page="(\w+)"[^>]*>[^<]*<\/a>/g;

function linkServicePages(html, language, label) {
    return html.replace(SERVICE_LINK, (link, service) => {
        if (!SINGLE_LANGUAGE_PAGES.some(page => page.service === service)) {
            fail(`${label}: no page for data-service-page="${service}"`);
        }
        const page = servicePage(service, language);
        if (!page) return "";
        return link
            .replace(` data-service-page="${service}"`, "")
            .replace(/ href="[^"]*"/, ` href="${pageHref(language, page.path)}"`);
    });
}

function setLanguageLinks(html, language, paths, label) {
    let count = 0;
    const result = html.replace(
        /<a class="lang-btn[^"]*" href="[^"]*"(?: aria-current="true")? data-lang="(\w+)"/g,
        (match, target) => {
            count += 1;
            if (!LANGUAGES[target]) fail(`${label}: unknown language link "${target}"`);
            const active = target === language;
            return `<a class="lang-btn${active ? " active" : ""}" href="${pageHref(target, paths[target])}"` +
                `${active ? ' aria-current="true"' : ""} data-lang="${target}"`;
        }
    );
    if (count === 0) fail(`${label}: no language links found`);
    return result;
}

/* `cluster`: the languages this page has equivalents in (hreflang +
   og:locale:alternate); empty for single-language pages. */
function setHead(html, language, path, label, cluster) {
    const { htmlLang, ogLocale } = LANGUAGES[language];
    const self = pageUrl(language, path);

    html = replaceOnce(html, /<html lang="[^"]*">/, `<html lang="${htmlLang}">`, `${label} <html lang>`);

    const alternates = cluster
        .map(code => `    <link rel="alternate" hreflang="${LANGUAGES[code].hreflang}" href="${pageUrl(code, path)}">`)
        .concat(cluster.includes(DEFAULT_LANGUAGE)
            ? [`    <link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LANGUAGE, path)}">`]
            : []);

    html = replaceOnce(
        html,
        /( *)<link rel="canonical" href="[^"]*">/,
        (match, indent) => [`<link rel="canonical" href="${self}">`, ...alternates]
            .map(line => indent + line.trimStart()).join("\n"),
        `${label} canonical`
    );

    html = replaceOnce(
        html,
        /(<meta property="og:url" content=")[^"]*(">)/,
        (match, open, close) => open + self + close,
        `${label} og:url`
    );

    html = replaceOnce(
        html,
        /( *)<meta property="og:locale" content="[^"]*">/,
        (match, indent) => [`${indent}<meta property="og:locale" content="${ogLocale}">`]
            .concat(cluster
                .filter(code => code !== language)
                .map(code => `${indent}<meta property="og:locale:alternate" content="${LANGUAGES[code].ogLocale}">`))
            .join("\n"),
        `${label} og:locale`
    );

    return html;
}

/* Legal pages: the template holds the three original panels verbatim;
   each language keeps only its own panel, unhidden. */
function selectLegalPanel(html, language, label) {
    const panelPattern = /<section class="legal-lang-panel" data-legal-panel="(\w+)"( hidden)?>[\s\S]*?<\/section>\n*/g;
    const found = [...html.matchAll(panelPattern)].map(match => match[1]);

    if (found.length !== Object.keys(LANGUAGES).length || !found.includes(language)) {
        fail(`${label}: expected one legal panel per language, found [${found}]`);
    }

    return html.replace(panelPattern, (panel, code, hidden) => {
        if (code !== language) return "";
        return panel.replace(` data-legal-panel="${code}" hidden>`, ` data-legal-panel="${code}">`);
    });
}

/* The ?v= query on main.js (set in the templates) busts the 10-minute
   GitHub Pages cache when the script and the generated HTML change together. */
const MAIN_SCRIPT = /( *)(<script src="\/js\/main\.js(?:\?v=[\w.-]+)?"><\/script>)/;

function addRuntimeStrings(html, payload, label) {
    if (!MAIN_SCRIPT.test(html)) return html;
    const json = JSON.stringify(payload).replace(/</g, "\\u003c");
    return replaceOnce(
        html,
        MAIN_SCRIPT,
        (match, indent, script) =>
            `${indent}<script type="application/json" id="i18nRuntime">${json}</script>\n` +
            `${indent}${script}`,
        `${label} runtime strings`
    );
}

function addBanner(html, file) {
    return replaceOnce(
        html,
        /^<!DOCTYPE html>\n/i,
        `<!DOCTYPE html>\n<!-- Generated by _i18n/build.mjs from _i18n/templates/${file}.\n` +
        `     Edit the template or _i18n/translations.json, then run: node _i18n/build.mjs -->\n`,
        `${file} doctype`
    );
}

const pick = (dict, keys) => Object.fromEntries(keys.map(key => [key, dict[key]]));


/* The stylesheet URL carries a hash of css/style.css (line endings
   normalised, so Windows and Linux checkouts agree). Pages are rebuilt
   whenever the CSS changes, and --check reports them as out of date. */
const STYLESHEET = /<link rel="stylesheet" href="\/css\/style\.css(?:\?v=[\w.-]+)?">/;

function stylesheetVersion() {
    const css = readFileSync(join(ROOT, "css", "style.css"), "utf8").replace(/\r\n/g, "\n");
    return createHash("sha256").update(css).digest("hex").slice(0, 10);
}

function versionStylesheet(html, version, label) {
    return replaceOnce(html, STYLESHEET,
        `<link rel="stylesheet" href="/css/style.css?v=${version}">`, `${label} stylesheet`);
}


/* ----------------------------------------------------------------- build */

function build() {
    const translations = loadTranslations();
    const outputs = new Map();
    const referenced = new Set(RUNTIME_KEYS);
    const cssVersion = stylesheetVersion();

    const readTemplate = file => {
        const html = readFileSync(join(SOURCE, "templates", file), "utf8").replace(/\r\n/g, "\n");
        for (const key of usedKeys(html)) {
            referenced.add(key);
            if (!(key in translations[DEFAULT_LANGUAGE])) fail(`${file}: unknown key "${key}"`);
        }
        return html;
    };

    const render = (html, file, language, path, cluster, switcher) => {
        const label = `${LANGUAGES[language].dir}${path || file}`;
        const dict = translations[language];

        if (file === "privacy.html" || file === "impressum.html") {
            html = selectLegalPanel(html, language, label);
        }

        html = linkServicePages(html, language, label);
        html = translateText(html, dict, label);
        html = translateAttributes(html, dict, label);
        html = setHead(html, language, path, label, cluster);
        html = localizeLinks(html, language);
        html = setLanguageLinks(html, language, switcher, label);
        html = addRuntimeStrings(html, { languages: { [language]: pick(dict, RUNTIME_KEYS) } }, label);
        html = versionStylesheet(html, cssVersion, label);
        return addBanner(html, file);
    };

    for (const { file, path } of PAGES) {
        const template = readTemplate(file);

        for (const language of Object.keys(LANGUAGES)) {
            outputs.set(`${LANGUAGES[language].dir}${file}`,
                render(template, file, language, path, Object.keys(LANGUAGES), samePathEverywhere(path)));
        }
    }

    for (const { file, language, path, service } of SINGLE_LANGUAGE_PAGES) {
        const switcher = Object.fromEntries(Object.keys(LANGUAGES)
            .map(code => [code, servicePage(service, code)?.path ?? ""]));
        outputs.set(`${LANGUAGES[language].dir}${path}`,
            render(readTemplate(file), file, language, path, [], switcher));
    }

    // 404: English HTML, all three languages embedded for runtime switching.
    {
        const template = readTemplate(NOT_FOUND);
        const keys = [...new Set([...usedKeys(template), ...RUNTIME_KEYS])];
        const dict = translations[DEFAULT_LANGUAGE];
        let html = linkServicePages(template, DEFAULT_LANGUAGE, NOT_FOUND);
        html = translateText(html, dict, NOT_FOUND);
        html = translateAttributes(html, dict, NOT_FOUND);
        html = setLanguageLinks(html, DEFAULT_LANGUAGE, samePathEverywhere(""), NOT_FOUND);
        html = addRuntimeStrings(html, {
            dynamic: true,
            paths: Object.fromEntries(Object.keys(LANGUAGES).map(code => [code, pageHref(code, "")])),
            languages: Object.fromEntries(Object.keys(LANGUAGES).map(code => [code, pick(translations[code], keys)])),
        }, NOT_FOUND);
        html = versionStylesheet(html, cssVersion, NOT_FOUND);
        outputs.set(NOT_FOUND, addBanner(html, NOT_FOUND));
    }

    // Sitemap: every indexable page in every language, then the single-language pages.
    const urls = PAGES.flatMap(({ path }) => Object.keys(LANGUAGES).map(code => pageUrl(code, path)))
        .concat(SINGLE_LANGUAGE_PAGES.map(({ language, path }) => pageUrl(language, path)));
    outputs.set("sitemap.xml",
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        urls.map(url => `  <url>\n    <loc>${url}</loc>\n  </url>\n`).join("") +
        "</urlset>\n");

    const unused = Object.keys(translations[DEFAULT_LANGUAGE]).filter(key => !referenced.has(key));
    return { outputs, unused };
}


/* ------------------------------------------------------------------ main */

try {
    const check = process.argv.includes("--check");
    const { outputs, unused } = build();
    const stale = [];

    for (const [relative, content] of outputs) {
        const target = join(ROOT, relative);
        const raw = existsSync(target) ? readFileSync(target, "utf8") : null;
        if (raw !== null && raw.replace(/\r\n/g, "\n") === content) continue;

        stale.push(relative);
        if (!check) {
            // Keep the line endings an existing file already uses (the repo
            // history has CRLF files), so rebuilds do not create noisy diffs.
            const eol = raw !== null && raw.includes("\r\n") ? "\r\n" : "\n";
            mkdirSync(dirname(target), { recursive: true });
            writeFileSync(target, eol === "\n" ? content : content.replace(/\n/g, eol));
        }
    }

    if (unused.length) console.warn(`warning: unused translation keys: ${unused.join(", ")}`);

    if (check) {
        if (stale.length) {
            console.error(`out of date: ${stale.join(", ")}\nrun: node _i18n/build.mjs`);
            process.exit(1);
        }
        console.log(`ok: ${outputs.size} generated files are up to date`);
    } else {
        console.log(`built ${outputs.size} files (${stale.length} changed)`);
    }
} catch (error) {
    if (!(error instanceof BuildError)) throw error;
    console.error(`build failed: ${error.message}`);
    process.exit(1);
}
