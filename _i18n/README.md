# Multilingual build

The site is published in English (`/`), German (`/de/`) and Serbian Latin (`/sr/`).
Every language has its own static HTML, canonical URL and reciprocal `hreflang` links,
so crawlers read the right language without running JavaScript.

## Sources — edit these

| File | Purpose |
| --- | --- |
| `translations.json` | Every UI string, one block per language (`en`, `de`, `sr`). Keys must match in all three. |
| `templates/*.html` | English page templates. Translatable elements carry `data-i18n` / `data-i18n-*` keys. |

Legal pages (`impressum.html`, `privacy.html`) keep the original three legal panels
verbatim in their templates; each language output contains only its own panel.

## Generated — do not edit by hand

`index.html`, `contact.html`, `privacy.html`, `impressum.html`, `404.html`,
`de/*`, `sr/*` and `sitemap.xml`. Each generated HTML file starts with a comment
naming its template.

## Commands (Node 18+, no dependencies)

```bash
node _i18n/build.mjs           # regenerate pages + sitemap
node _i18n/build.mjs --check   # fail if generated files are out of date
node _i18n/verify.mjs          # static SEO / translation / link checks
```

Run `build` then `verify` after every change to a template or translation.

## Rules the build enforces

- All languages have the same keys, none empty; unknown keys in templates fail the build.
- `data-i18n` elements must contain plain text only (no nested markup).
- English keeps the existing URLs; `x-default` points to English.
- The URL decides the language. `js/main.js` only uses the stored choice
  on the 404 page when the missing URL has no `/de/` or `/sr/` prefix.

The `_i18n` folder is not published: Jekyll on GitHub Pages skips directories
whose name starts with an underscore.
