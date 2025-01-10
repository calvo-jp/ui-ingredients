---
title: Hover Card
description: A component that displays additional information when hovering over an element
---

<script>
  import {HoverCardDemo} from '$lib/demo';
  import {Anatomy} from '$lib/anatomy';
  import {Api} from '$lib/api';
  import Metadata from '$lib/metadata.svelte';
  import PageHeading from '$lib/page-heading.svelte';
</script>

<svelte:head>

  <title>UI Ingredients | {title}</title>
</svelte:head>

<Metadata title="{title}" description="{description}" />
<PageHeading title="{title}" description="{description}" />

<HoverCardDemo />

## Anatomy

<Anatomy id="hover-card" />

## Usage

```svelte
<script>
  import {HoverCard, Portal} from 'ui-ingredients';
</script>

<HoverCard.Root>
  <HoverCard.Trigger>Hover me</HoverCard.Trigger>
  <Portal>
    <HoverCard.Positioner>
      <HoverCard.Content>
        <HoverCard.Arrow>
          <HoverCard.ArrowTip />
        </HoverCard.Arrow>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis natus
        neque, tenetur praesentium laboriosam esse eius at maxime quam magni
        rerum animi ducimus debitis?
      </HoverCard.Content>
    </HoverCard.Positioner>
  </Portal>
</HoverCard.Root>
```

## API Reference

<Api id="hover-card" />
