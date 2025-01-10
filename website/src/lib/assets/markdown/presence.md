---
title: 'Presence'
description: 'A component that controls content rendering and unmounting based on state.'
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
<script>
  import {Presence} from 'ui-ingredients';

  let present = $state(false);
</script>

<button
  onclick={() => {
    present = !present;
  }}
>
  Toggle
</button>

<Presence {present} lazyMount keepMounted>Content</Presence>
```

## API Reference

<Api id="presence" />
