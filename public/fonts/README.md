# Fonts

Drop the brand display face here:

    public/fonts/helvetica-inserat.woff2

**Helvetica Inserat LT Std** is a licensed Linotype font, so it is not committed to
the repo. It is loaded via `@font-face` in `app/globals.css` and scoped to headings
(`--font-display`). Until the file is present, headings fall back to
`Helvetica, Arial, sans-serif` with no layout shift (`font-display: swap`).

If you have the font in another format (`.ttf`/`.otf`/`.woff`), convert it to `woff2`
(e.g. with `fonttools` or an online converter) and name it exactly as above, or update
the `src` URL in `app/globals.css` to match.
