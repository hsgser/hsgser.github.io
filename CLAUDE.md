# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Dang Nguyen's personal academic homepage at https://hsgser.github.io, built on the
[al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Most edits here are **content**
updates (a new paper, a news item, a CV change), not theme code. The upstream theme docs live in
`README.md`, `CUSTOMIZE.md`, `INSTALL.md`, and `FAQ.md` — consult them for theme internals before
touching `_layouts/`, `_includes/`, `_sass/`, or `_plugins/`.

## Commands

```bash
bundle exec jekyll serve            # local dev server with live reload → http://localhost:4000
bundle exec jekyll build            # one-off build into _site/ (CI runs this with JEKYLL_ENV=production)
docker compose up                   # containerized dev server → http://localhost:8080
npx prettier . --check              # lint formatting (CI gate); add --write to fix in place
```

There is no test suite. CI's only hard gates are the Prettier check (`.github/workflows/prettier.yml`)
and a successful Jekyll build (`.github/workflows/deploy.yml`). Prettier config: `.prettierrc`
(printWidth 150, `@shopify/prettier-plugin-liquid` for `.liquid` files). Run prettier before pushing —
a failing check blocks the PR and posts an HTML diff.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site, runs `purgecss`
to strip unused CSS, and publishes `_site/` to the `gh-pages` branch — **no manual deploy needed**.
The path filters in that workflow mean doc-only edits (`README.md`, `CUSTOMIZE.md`, `FAQ.md`,
`INSTALL.md`) do not trigger a rebuild. `bin/deploy` is a manual fallback that does the same thing
locally; prefer letting CI handle it.

## Content architecture

The site renders from these data/content sources rather than hand-written HTML pages:

- **Publications** — `_bibliography/papers.bib`. Standard BibTeX rendered by `jekyll-scholar`
  (configured under `scholar:` in `_config.yml`), using `_layouts/bib.liquid`. al-folio extends each
  entry with custom fields:
  - `abbr={ICML}` — venue badge; the string must have a matching key in `_data/venues.yml`
    (which supplies the badge color and link). Add the venue there first if it's new.
  - `bibtex_show={true}`, `abstract`, `pdf`, `code`, `website`, `workshop`, `selected={true}`
    (feature on homepage), `preview` (thumbnail image).
  - Author names ending in `*` (e.g. `Nguyen*, Dang`) denote equal contribution.
  - Co-author names matched in `_data/coauthors.yml` get auto-linked to their homepages.
- **News / announcements** — one file per item in `_news/`, e.g. `announcement_16.md`. Front matter
  carries `date` and `inline: true`; body is a one-line markdown sentence. The homepage shows the
  latest few.
- **CV** — structured data in `_data/cv.yml` (rendered by `_pages/cv.md`) plus the downloadable PDF
  `assets/pdf/DangNguyen_CV.pdf` (referenced via `cv_pdf:` front matter in `_pages/cv.md`).
- **About / homepage** — `_pages/about.md` (`permalink: /`), including the profile image and
  the toggles for announcements and selected papers.
- Other pages live in `_pages/`; site-wide settings (name, email, social, scholar config, feature
  flags like `enable_publication_thumbnails`) are in `_config.yml`.

## Plugins worth knowing

`_plugins/` holds custom Ruby that runs at build time — notably `google-scholar-citations.rb` and
`inspirehep-citations.rb` (fetch citation counts), `remove-accents.rb`, and `download-3rd-party.rb`
(vendors JS/CSS libs into `assets/libs/`, which is git-ignored and regenerated on build). The Gemfile
pins the full al-folio plugin stack (`jekyll-scholar`, `jekyll-imagemagick`, `jekyll-minifier`,
`jekyll-twitter-plugin`, etc.); ImageMagick must be installed locally for image processing.

## Conventions

- `_site/`, `.jekyll-cache/`, `assets/libs/`, `node_modules/`, and `Gemfile.lock` are git-ignored or
  generated — don't hand-edit them.
- Keep BibTeX and YAML well-formed: a malformed `.bib` entry or `_data/*.yml` file breaks the build.
- The typical workflow for "add a paper" is: append the entry to `papers.bib`, ensure its `abbr`
  exists in `venues.yml`, add a `_news/` item, run `prettier --write`, commit to `main`.
