---
title: Highlight
description: A component for highlighting text within a string.
---

<script>
  import HighlightDemo from '$lib/demo/highlight.svelte';
  import Metadata from '$lib/metadata.svelte';
  import PageHeading from '$lib/page-heading.svelte';
  import {Api} from '$lib/api';
</script>

<svelte:head>

  <title>UI Ingredients | {title}</title>
</svelte:head>

<Metadata title="{title}" description="{description}" />
<PageHeading title="{title}" description="{description}" />

<HighlightDemo />

## Usage

```svelte
<script>
  import {Highlight} from 'ui-ingredients';

  let text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente consequatur, eos explicabo architecto exercitationem? Consequuntur repellat laboriosam ullam adipisci?';
</script>

<Highlight {text} query="consectetur" />
```

## API Reference

<Api id="highlight" />
