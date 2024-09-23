<script lang="ts">
  import {SegmentGroup} from '$lib/index.js';

  let items = [
    {value: 'Item 1'},
    {value: 'Item 2'},
    {value: 'Item 3'},
    {value: 'Item 4'},
    {value: 'Item 5'},
  ];
</script>

<SegmentGroup.Root
  value={items[0].value}
  orientation="horizontal"
  class="relative flex w-fit"
>
  {#each items as item}
    <SegmentGroup.Item
      value={item.value}
      class="data-checked:text-white relative z-10 px-2.5 py-1 font-medium transition-colors duration-200"
    >
      <SegmentGroup.ItemText>{item.value}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  {/each}

  <SegmentGroup.Indicator
    class="bg-light/50 bottom-0 h-full w-[var(--width)] rounded"
  />
</SegmentGroup.Root>
