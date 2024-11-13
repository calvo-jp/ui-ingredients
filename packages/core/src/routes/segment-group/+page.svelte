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

  let value: string | undefined = $state();

  $effect(() => {
    value = items[0].value;
  });

  $inspect(value);
</script>

<SegmentGroup.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  orientation="horizontal"
  class="relative flex w-fit"
>
  {#each items as item}
    <SegmentGroup.Item
      value={item.value}
      class="relative z-10 px-2.5 py-1 font-medium transition-colors duration-200 data-checked:text-white"
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
