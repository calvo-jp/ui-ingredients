---
name: SegmentGroup
description: A component for grouping and toggling between different sections or options, often used for filters or navigation.
---

## Usage

```svelte
<script lang="ts">
  import {SegmentGroup} from 'ui-ingredients';

  let items = [
    /**/
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];
</script>

<SegmentGroup.Root value={items[0]} orientation="horizontal">
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
