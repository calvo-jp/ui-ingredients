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

  let value: string | null = $state(null);

  $effect(() => {
    value = items[0].value;
  });

  $inspect({value});
</script>

<SegmentGroup.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  orientation="horizontal"
>
  {#each items as item}
    <SegmentGroup.Item value={item.value}>
      <SegmentGroup.ItemText>{item.value}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  {/each}

  <SegmentGroup.Indicator />
</SegmentGroup.Root>
