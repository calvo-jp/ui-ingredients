---
title: Locale Provider
description: A component for providing locale information to the rest of the application.
---

<script>
  import Metadata from '$lib/metadata.svelte';
  import PageHeading from '$lib/page-heading.svelte';
  import {Api} from '$lib/api';
</script>

<svelte:head>

  <title>UI Ingredients | {title}</title>
</svelte:head>

<Metadata title="{title}" description="{description}" />
<PageHeading title="{title}" description="{description}" />

## Usage

```svelte
<!-- src/+layout.svelte -->
<script>
  import {LocaleProvider} from 'ui-ingredients';

  let {children} = $props();
</script>

<LocaleProvider locale="en-US">
  {@render children()}
</LocaleProvider>
```

## API Reference

<Api id="locale-provider" />