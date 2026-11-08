#!/usr/bin/env node
/*
 * Static checks for the generated pages — reads the HTML exactly as a
 * crawler that does not execute JavaScript would (Node 18+, no deps).
 *
 *   node _i18n/verify.mjs
 *
 * Checks per page: <html lang>, title/description, canonical, og:url,
 * og:locale, reciprocal hreflang (incl. x-default), every data-i18n text
 * and attribute against translations.json, internal links and #anchors,
 * language links, images, runtime strings, legal panels; plus sitemap.xml
 * and robots.txt. Single-language pages: canonical only (no hreflang),
 * meta and social tags, JSON-LD, links to them from the home and contact
 * pages. All indexable pages: unique title and description, one <h1>, no
 * skipped heading levels. Every generated page links css/style.css with
 * the current content hash as ?v=, and the CSS url() assets exist.
 */

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://kartaloviclabs.com";
const translations = JSON.parse(readFileSync(join(ROOT, "_i18n/translations.json"), "utf8"));

const LANGUAGES = {
    en: { dir: "", htmlLang: "en", hreflang: "en", ogLocale: "en_US" },
    de: { dir: "de/", htmlLang: "de", hreflang: "de", ogLocale: "de_DE" },
    sr: { dir: "sr/", htmlLang: "sr-Latn", hreflang: "sr-Latn", ogLocale: "sr_RS" },
};
const PAGES = ["", "contact.html", "privacy.html", "impressum.html"];
/* Mirrors SINGLE_LANGUAGE_PAGES in build.mjs. */
const SINGLE_LANGUAGE_PAGES = [
    { language: "de", path: "webdesign-vechta.html", service: "web" },
    { language: "sr", path: "izrada-sajtova.html", service: "web" },
];
const SERVICE_PATH = new RegExp(`^/(?:(?:de|sr)/)?(?:${SINGLE_LANGUAGE_PAGES.map(p => p.path.replace(/\./g, "\\.")).join("|")})$`);
const RUNTIME_KEYS = ["menuOpen", "menuClose", "formSending", "formSuccess", "formError", "formSubmit"];
const ATTRIBUTES = {
    "data-i18n-content": "content",
    "data-i18n-alt": "alt",
    "data-i18n-aria-label": "aria-label",
    "data-i18n-placeholder": "placeholder",
};

const problems = [];
let checks = 0;

function expect(condition, message) {
    checks += 1;
    if (!condition) problems.push(message);
}

const decode = value => value
    .replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

const attr = (tag, name) => {
    const match = tag.match(new RegExp(`\\s${name}="([^"]*)"`));
    return match ? decode(match[1]) : null;
};

const tags = (html, pattern) => [...html.matchAll(pattern)].map(match => match[0]);

const fileForUrl = url => {
    const path = url.replace(SITE, "").split("#")[0];
    return path.endsWith("/") || path === "" ? `${path.replace(/^\//, "")}index.html` : path.replace(/^\//, "");
};

const read = relative => readFileSync(join(ROOT, relative), "utf8").replace(/\r\n/g, "\n");

const idsCache = new Map();
const idsIn = relative => {
    if (!idsCache.has(relative)) {
        idsCache.set(relative, new Set([...read(relative).matchAll(/\sid="([^"]+)"/g)].map(m => m[1])));
    }
    return idsCache.get(relative);
};

function checkTranslations(html, language, label) {
    const dict = translations[language];

    for (const match of html.matchAll(/<([a-z0-9]+)\b[^>]*?\sdata-i18n="([^"]+)"[^>]*>([^<]*)<\/\1>/g)) {
        const [, , key, inner] = match;
        expect(decode(inner.trim()) === dict[key], `${label}: text of "${key}" is not the ${language} translation`);
    }

    for (const [source, target] of Object.entries(ATTRIBUTES)) {
        for (const tag of tags(html, new RegExp(`<[a-z][^>]*\\s${source}="[^"]+"[^>]*>`, "g"))) {
            const key = attr(tag, source);
            expect(attr(tag, target) === dict[key], `${label}: ${target} of "${key}" is not the ${language} translation`);
        }
    }
}

function checkLinks(html, language, label, isNotFound) {
    for (const tag of tags(html, /<a\b[^>]*>/g)) {
        const href = attr(tag, "href");
        if (!href || !href.startsWith("/")) continue;

        const [path, hash] = href.split("#");
        const target = path.endsWith("/") ? `${path.slice(1)}index.html` : path.slice(1);
        expect(existsSync(join(ROOT, target)), `${label}: link ${href} points to a missing file`);
        if (hash && existsSync(join(ROOT, target))) {
            expect(idsIn(target).has(hash), `${label}: link ${href} points to a missing #${hash}`);
        }

        // Page links stay inside the page language (language links excepted).
        const isPage = /^\/(?:(?:de|sr)\/)?(?:(?:contact|privacy|impressum)\.html)?$/.test(path) || SERVICE_PATH.test(path);
        if (isPage && !tag.includes('class="lang-btn') && !isNotFound) {
            expect(path.startsWith(`/${LANGUAGES[language].dir}`) && (LANGUAGES[language].dir || !/^\/(de|sr)\//.test(path)),
                `${label}: page link ${href} leaves the ${language} version`);
        }
    }

    for (const tag of tags(html, /<(?:img|source)\b[^>]*>/g)) {
        const sources = [attr(tag, "src"), ...(attr(tag, "srcset") || "").split(",").map(s => s.trim().split(/\s+/)[0])]
            .filter(Boolean);
        for (const source of sources) {
            if (source.startsWith("/")) expect(existsSync(join(ROOT, source.slice(1))), `${label}: missing image ${source}`);
        }
    }

    for (const tag of tags(html, /<(?:link|script)\b[^>]*>/g)) {
        const url = (attr(tag, "href") || attr(tag, "src") || "").split("?")[0];
        if (url.startsWith("/")) expect(existsSync(join(ROOT, url.slice(1))), `${label}: missing asset ${url}`);
    }
}

function checkAccessibility(html, label) {
    expect(/<body[^>]*>\s*<a class="skip-link" href="#main"/.test(html), `${label}: skip link is not the first element in <body>`);
    expect(tags(html, /<main\b[^>]*>/g).length === 1 && /<main\b[^>]*\sid="main"/.test(html), `${label}: expected one <main id="main">`);
    if (html.includes('class="menu-toggle"')) {
        const flag = html.indexOf('classList.add("js")');
        expect(flag !== -1 && flag < html.indexOf('rel="stylesheet"'), `${label}: "js" class must be set before the stylesheet`);
    }
    if (html.includes('name="_gotcha"')) {
        for (const [name, limit] of [["name", 100], ["email", 254], ["message", 5000]]) {
            expect(new RegExp(`name="${name}"\\s+maxlength="${limit}"`).test(html), `${label}: ${name} field needs maxlength ${limit}`);
        }
    }
}

/* Runtime strings for js/main.js (pages that load it). */
function checkRuntimeStrings(html, language, label) {
    if (!/src="\/js\/main\.js(\?v=[\w.-]+)?"/.test(html)) return;
    const json = /<script type="application\/json" id="i18nRuntime">([^<]*)<\/script>/.exec(html)?.[1];
    const runtime = json ? JSON.parse(json) : null;
    expect(/src="\/js\/main\.js\?v=[\w.-]+"/.test(html), `${label}: main.js is not versioned (cache busting)`);
    expect(runtime && RUNTIME_KEYS.every(k => runtime.languages?.[language]?.[k] === translations[language][k]), `${label}: runtime strings missing or wrong`);
}

/* Indexable pages: one <h1>, heading levels never skip (h2 -> h4). */
function checkHeadings(html, label) {
    const levels = [...html.matchAll(/<h([1-6])\b/g)].map(match => Number(match[1]));
    expect(levels.filter(level => level === 1).length === 1 && levels[0] === 1, `${label}: expected one <h1> before other headings`);
    expect(levels.every((level, i) => i === 0 || level <= levels[i - 1] + 1), `${label}: heading levels skip (${levels.join(",")})`);
}

/* Titles and descriptions must not repeat across indexable pages. */
const metaSeen = { title: new Map(), description: new Map() };

function checkUniqueMeta(html, label) {
    const values = {
        title: /<title[^>]*>([^<]*)<\/title>/.exec(html)?.[1],
        description: attr(tags(html, /<meta name="description"[^>]*>/g)[0] || "", "content"),
    };
    for (const [kind, value] of Object.entries(values)) {
        expect(Boolean(value), `${label}: missing ${kind}`);
        const other = metaSeen[kind].get(value);
        expect(!other, `${label}: same ${kind} as ${other}`);
        metaSeen[kind].set(value, label);
    }
}

function hreflangSet(html) {
    return Object.fromEntries(tags(html, /<link rel="alternate" hreflang="[^"]+" href="[^"]+">/g)
        .map(tag => [attr(tag, "hreflang"), attr(tag, "href")]));
}

/* ---------------------------------------------------- indexable pages */

for (const page of PAGES) {
    for (const [language, config] of Object.entries(LANGUAGES)) {
        const file = `${config.dir}${page || "index.html"}`;
        const label = file;
        const self = `${SITE}/${config.dir}${page}`;

        expect(existsSync(join(ROOT, file)), `${label}: file missing`);
        if (!existsSync(join(ROOT, file))) continue;

        const html = read(file);
        const dict = translations[language];
        const metaKey = { "": "Home", "contact.html": "Contact", "privacy.html": "Privacy", "impressum.html": "Impressum" }[page];

        expect(html.includes(`<html lang="${config.htmlLang}">`), `${label}: wrong <html lang>`);
        expect(/<title[^>]*>([^<]*)<\/title>/.exec(html)?.[1] === dict[`metaTitle${metaKey}`].replace(/&/g, "&amp;"), `${label}: wrong <title>`);
        expect(!/name="robots"[^>]*noindex/.test(html), `${label}: indexable page has noindex`);

        const canonicals = tags(html, /<link rel="canonical"[^>]*>/g);
        expect(canonicals.length === 1 && attr(canonicals[0], "href") === self, `${label}: canonical is not ${self}`);
        expect(attr(tags(html, /<meta property="og:url"[^>]*>/g)[0] || "", "content") === self, `${label}: og:url is not ${self}`);
        expect(attr(tags(html, /<meta property="og:locale"[^>]*>/g)[0] || "", "content") === config.ogLocale, `${label}: wrong og:locale`);
        expect(tags(html, /<meta property="og:locale:alternate"[^>]*>/g).length === 2, `${label}: expected 2 og:locale:alternate`);

        // hreflang: complete, absolute, self-referencing and reciprocal.
        const alternates = hreflangSet(html);
        const expected = Object.fromEntries(Object.values(LANGUAGES)
            .map(c => [c.hreflang, `${SITE}/${c.dir}${page}`]).concat([["x-default", `${SITE}/${page}`]]));
        expect(JSON.stringify(alternates) === JSON.stringify(expected), `${label}: hreflang set differs from expected`);
        expect(alternates[config.hreflang] === self, `${label}: hreflang does not reference itself`);
        for (const url of Object.values(alternates)) {
            expect(url.startsWith("https://"), `${label}: hreflang URL not absolute: ${url}`);
            const other = fileForUrl(url);
            if (existsSync(join(ROOT, other))) {
                expect(JSON.stringify(hreflangSet(read(other))) === JSON.stringify(alternates),
                    `${label}: hreflang not reciprocal with ${other}`);
            }
        }

        // Language links lead to the equivalent page; current one is marked.
        for (const tag of tags(html, /<a class="lang-btn[^>]*>/g)) {
            const target = attr(tag, "data-lang");
            expect(attr(tag, "href") === `/${LANGUAGES[target].dir}${page}`, `${label}: ${target} link does not point to the equivalent page`);
            expect((attr(tag, "aria-current") === "true") === (target === language), `${label}: aria-current wrong on ${target} link`);
        }

        checkTranslations(html, language, label);
        checkLinks(html, language, label, false);
        checkAccessibility(html, label);
        checkRuntimeStrings(html, language, label);
        checkHeadings(html, label);
        checkUniqueMeta(html, label);

        // Service pages: linked from the home and contact pages of their own language only.
        const ownServicePages = SINGLE_LANGUAGE_PAGES.filter(p => p.language === language).map(p => `/${config.dir}${p.path}`);
        const serviceLinks = tags(html, /<a\b[^>]*>/g)
            .filter(tag => !tag.includes('class="lang-btn') && SERVICE_PATH.test(attr(tag, "href") || ""))
            .map(tag => attr(tag, "href"));
        if (page === "" || page === "contact.html") {
            expect(ownServicePages.every(href => serviceLinks.includes(href)), `${label}: no link to the ${language} service page`);
        }
        expect(serviceLinks.every(href => ownServicePages.includes(href)), `${label}: links to a service page in another language`);
        expect(!html.includes("data-service-page"), `${label}: unresolved data-service-page link`);

        if (page === "privacy.html" || page === "impressum.html") {
            const panels = [...html.matchAll(/data-legal-panel="(\w+)"( hidden)?/g)];
            expect(panels.length === 1 && panels[0][1] === language && !panels[0][2], `${label}: expected exactly the visible ${language} legal panel`);
        }
    }
}

/* ------------------------------------------- single-language pages */

for (const { language, path, service } of SINGLE_LANGUAGE_PAGES) {
    const config = LANGUAGES[language];
    const file = `${config.dir}${path}`;
    const label = file;
    const self = `${SITE}/${file}`;

    expect(existsSync(join(ROOT, file)), `${label}: file missing`);
    if (!existsSync(join(ROOT, file))) continue;

    const html = read(file);
    const meta = name => attr(tags(html, new RegExp(`<meta (?:name|property)="${name}"[^>]*>`, "g"))[0] || "", "content");
    const title = decode(/<title[^>]*>([^<]*)<\/title>/.exec(html)?.[1] || "");
    const description = meta("description") || "";

    expect(html.includes(`<html lang="${config.htmlLang}">`), `${label}: wrong <html lang>`);
    expect(title.length > 0 && title.length <= 65, `${label}: title missing or longer than 65 characters`);
    expect(description.length >= 70 && description.length <= 160, `${label}: description not 70-160 characters`);
    expect(!/name="robots"[^>]*noindex/.test(html), `${label}: indexable page has noindex`);

    // Canonical only: no translated equivalents, so no hreflang cluster.
    const canonicals = tags(html, /<link rel="canonical"[^>]*>/g);
    expect(canonicals.length === 1 && attr(canonicals[0], "href") === self, `${label}: canonical is not ${self}`);
    expect(Object.keys(hreflangSet(html)).length === 0, `${label}: single-language page must not carry hreflang links`);
    expect(meta("og:url") === self, `${label}: og:url is not ${self}`);
    expect(meta("og:locale") === config.ogLocale, `${label}: wrong og:locale`);
    expect(!html.includes("og:locale:alternate"), `${label}: unexpected og:locale:alternate`);
    for (const [name, value] of [["og:title", title], ["twitter:title", title], ["og:description", description], ["twitter:description", description]]) {
        expect(meta(name) === value, `${label}: ${name} differs from the page ${name.split(":")[1]}`);
    }
    for (const name of ["og:type", "og:site_name", "og:image", "og:image:alt", "twitter:card", "twitter:image"]) {
        expect(Boolean(meta(name)), `${label}: missing ${name}`);
    }

    // Language links: the same service in that language, else its home page.
    for (const tag of tags(html, /<a class="lang-btn[^>]*>/g)) {
        const target = attr(tag, "data-lang");
        const twin = SINGLE_LANGUAGE_PAGES.find(p => p.service === service && p.language === target);
        expect(attr(tag, "href") === `/${LANGUAGES[target].dir}${twin ? twin.path : ""}`, `${label}: ${target} language link is wrong`);
        expect((attr(tag, "aria-current") === "true") === (target === language), `${label}: aria-current wrong on ${target} link`);
    }

    // JSON-LD: valid, about this page, no ratings, reviews or prices.
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => match[1]);
    let data = null;
    try {
        data = blocks.length === 1 ? JSON.parse(blocks[0]) : null;
    } catch {
        data = null;
    }
    expect(data?.["@type"] === "Service" && data.url === self && data.provider?.name === "KARTALOVIC LABS", `${label}: JSON-LD missing, invalid or not about this page`);
    expect(!/aggregateRating|"review|"offers/i.test(blocks.join("")), `${label}: JSON-LD claims ratings, reviews or offers`);

    checkTranslations(html, language, label);
    checkLinks(html, language, label, false);
    checkAccessibility(html, label);
    checkRuntimeStrings(html, language, label);
    checkHeadings(html, label);
    checkUniqueMeta(html, label);
    expect(!html.includes("data-service-page"), `${label}: unresolved data-service-page link`);
}

/* -------------------------------------------------------------- 404 */
{
    const html = read("404.html");
    expect(/<meta name="robots" content="noindex">/.test(html), "404.html: missing noindex");
    expect(!/rel="canonical"/.test(html), "404.html: must not have a canonical");
    const json = /<script type="application\/json" id="i18nRuntime">([^<]*)<\/script>/.exec(html)?.[1];
    const runtime = json ? JSON.parse(json) : {};
    expect(runtime.dynamic === true && ["en", "de", "sr"].every(l => runtime.languages?.[l]?.notFoundLine1 === translations[l].notFoundLine1),
        "404.html: runtime strings for all languages missing");
    checkTranslations(html, "en", "404.html");
    checkLinks(html, "en", "404.html", true);
    checkAccessibility(html, "404.html");
}

/* ------------------------------------------------ sitemap + robots */
{
    const sitemap = read("sitemap.xml");
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
    const expectedCount = PAGES.length * 3 + SINGLE_LANGUAGE_PAGES.length;
    expect(locs.length === expectedCount, `sitemap.xml: expected ${expectedCount} URLs, found ${locs.length}`);
    for (const loc of locs) expect(existsSync(join(ROOT, fileForUrl(loc))), `sitemap.xml: ${loc} has no file`);
    for (const { language, path } of SINGLE_LANGUAGE_PAGES) {
        expect(locs.includes(`${SITE}/${LANGUAGES[language].dir}${path}`), `sitemap.xml: ${LANGUAGES[language].dir}${path} missing`);
    }

    const robots = read("robots.txt");
    expect(robots.includes(`Sitemap: ${SITE}/sitemap.xml`), "robots.txt: sitemap line missing");
    expect(!/^Disallow:\s*\/\s*$/m.test(robots) && !/^Disallow:\s*\/(de|sr)/m.test(robots), "robots.txt blocks pages");
}

/* ------------------------------------------------------- stylesheet */
{
    const css = read("css/style.css");
    const version = createHash("sha256").update(css).digest("hex").slice(0, 10);
    const files = [
        ...Object.values(LANGUAGES).flatMap(({ dir }) => PAGES.map(path => `${dir}${path || "index.html"}`)),
        ...SINGLE_LANGUAGE_PAGES.map(({ language, path }) => `${LANGUAGES[language].dir}${path}`),
        "404.html",
    ];
    for (const file of files) {
        const links = tags(read(file), /<link rel="stylesheet"[^>]*>/g);
        expect(links.length === 1 && attr(links[0], "href") === `/css/style.css?v=${version}`,
            `${file}: stylesheet must be /css/style.css?v=${version}, found ${links.map(l => attr(l, "href"))}`);
    }
    for (const [, url] of css.matchAll(/url\("?([^")]+)"?\)/g)) {
        if (!url.startsWith("data:")) expect(existsSync(join(ROOT, "css", url)), `css/style.css: missing ${url}`);
    }
}

if (problems.length) {
    console.error(`${problems.length} problem(s) in ${checks} checks:\n- ${problems.join("\n- ")}`);
    process.exit(1);
}
console.log(`ok: ${checks} checks passed`);
