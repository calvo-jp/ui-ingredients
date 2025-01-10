---
title: Tabs
description: A component for organizing and switching between multiple sections of content within a single view.
---

<script>
  import {TabsDemo} from '$lib/demo';
  import {Anatomy} from '$lib/anatomy';
  import {Api} from '$lib/api';
  import {Accessibility} from '$lib/accessibility';
  import Metadata from '$lib/metadata.svelte';
  import PageHeading from '$lib/page-heading.svelte';
</script>

<svelte:head>

  <title>UI Ingredients | {title}</title>
</svelte:head>

<Metadata title="{title}" description="{description}" />
<PageHeading title="{title}" description="{description}" />

<TabsDemo />

## Anatomy

<Anatomy id="tabs" />

## Usage

```svelte
<script>
  import {Tabs} from 'ui-ingredients';

  let items = [
    {
      value: '1',
      label: 'Item 1',
      content: 'Item 1 Content',
    },
    {
      value: '2',
      label: 'Item 2',
      content: 'Item 2 Content',
    },
    {
      value: '3',
      label: 'Item 3',
      content: 'Item 3 Content',
    },
  ];
</script>

<Tabs.Root>
  <Tabs.List>
    {#each items as { value, label }}
      <Tabs.Trigger {value}>
        {label}
      </Tabs.Trigger>
    {/each}
  </Tabs.List>

  {#each items as { value, content }}
    <Tabs.Content {value}>
      {content}
    </Tabs.Content>
  {/each}
</Tabs.Root>
```

## API Reference

<Api id="tabs" />

## Accessibility

<Accessibility id="tabs" />
