---
title: Portal
description: A component for rendering content in a different part of the DOM hierarchy, often used for modals or tooltips.
---

<script>
  import Metadata from '$lib/metadata.svelte'
  import PageHeading from '$lib/page-heading.svelte'
  import {Api} from '$lib/api'
</script>

<svelte:head>

  <title>UI Ingredients | {title}</title>
</svelte:head>

<Metadata title="{title}" description="{description}" />
<PageHeading title="{title}" description="{description}" />

## Usage

```svelte
<script>
  import {Portal} from 'ui-ingredients';
</script>

<Portal>Content</Portal>
```

### Mounting to a different container

By default, the `Portal` component will mount the content to the `document.body`. You can specify a different container by passing a reference to the container element.

```svelte
<script>
  import {Portal} from 'ui-ingredients';

  /** @type {HTMLElement | null} */
  let container = $state(null);
</script>

<Portal {container}>Content</Portal>

<div bind:this={container}></div>
```

### Using Portal Provider

To globally set a container for all portals, you can use the `PortalProvider` component.

```svelte
<!-- +layout.svelte -->
<script>
  import {PortalProvider} from 'ui-ingredients';

  let {children} = $props();

  /** @type {HTMLElement | null} */
  let container = $state(null);
</script>

<PortalProvider {container}>
  {@render children()}
</PortalProvider>

<div bind:this={container}></div>
```

## API Reference

<Api id="portal" />