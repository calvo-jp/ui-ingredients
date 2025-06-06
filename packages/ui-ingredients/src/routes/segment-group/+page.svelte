<script lang="ts">
  import {SegmentGroup} from '$lib/index.js';

  let items = [
    {
      value: 'Item 1',
    },
    {
      value: 'Item 2',
    },
    {
      value: 'Item 3',
    },
  ];

  let value: string | null = $derived(items[0].value);

  $inspect({value});
</script>

<SegmentGroup.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  orientation="horizontal"
>
  <SegmentGroup.Indicator />

  {#each items as item}
    <SegmentGroup.Item value={item.value}>
      <SegmentGroup.ItemText>{item.value}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  {/each}
</SegmentGroup.Root>

<style>
  :global([data-scope='segment-group'][data-part='root']) {
    display: flex;
    position: relative;
    width: fit-content;
  }

  :global([data-scope='segment-group'][data-part='item']) {
    position: relative;
    padding: 4px 8px;
    cursor: pointer;
  }

  :global([data-scope='segment-group'][data-part='item'][data-highlighted]) {
    color: oklch(0.852 0.199 91.936);
  }

  :global([data-scope='segment-group'][data-part='indicator']) {
    bottom: 0;
    height: 100%;
    width: var(--width);
    background: oklch(0.97 0 0);
    border-radius: 4px;
  }
</style>
