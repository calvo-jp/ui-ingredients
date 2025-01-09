---
title: Segment Group
description: A component for grouping and toggling between different sections or options, often used for filters or navigation.
---

<script>
  import {SegmentGroupDemo} from '$lib/demo';
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

<SegmentGroupDemo />

## Anatomy

<Anatomy id="segment-group" />

## Usage

```svelte
<script>
  import {SegmentGroup} from 'ui-ingredients';

  let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
</script>

<SegmentGroup.Root>
  {#each items as item}
    <SegmentGroup.Item value={item.value}>
      <SegmentGroup.ItemText>{item.value}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  {/each}

  <SegmentGroup.Indicator />
</SegmentGroup.Root>
```

## API Reference

<Api id="segment-group" />

## Accessibility

<Accessibility id="radio-group" />
