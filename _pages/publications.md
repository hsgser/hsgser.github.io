---
layout: page
permalink: /publications/
title: Publications
description: (*) denotes equal contribution
years: [2026, 2025, 2024, 2023, 2022]
nav: true
nav_order: 1
---

<style>
  /* Local publications-page tweaks (no gem files touched; safe across updates) */

  /* 1. Uniform thumbnail box regardless of each figure's aspect ratio */
  .publications img.preview {
    width: 100%;
    height: 7rem;
    object-fit: contain;
  }

  /* 2. Keep Altmetric / Dimensions / Scholar / Inspire badges aligned on one row.
        Selector mirrors the gem's depth (.publications ol.bibliography li .badges ...)
        so it wins on specificity. */
  .publications ol.bibliography li .badges {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem;
  }
  .publications ol.bibliography li .badges span,
  .publications ol.bibliography li .badges a {
    display: inline-flex;
    align-items: center;
    height: auto;
    padding-right: 0;
    margin-bottom: 0;
  }
</style>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
