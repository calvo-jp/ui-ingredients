<script lang="ts">
  import {SegmentGroup} from 'ui-ingredients';

  let items = [
    {value: '1', label: 'Page 1'},
    {value: '2', label: 'Page 2'},
    {value: '3', label: 'Page 3'},
  ];
</script>

<div class="w-[18rem] shrink-0"></div>

<section
  class="fixed right-0 top-16 z-sticky mt-20 w-[18rem] shrink-0 border-l border-neutral-800 bg-neutral-950 py-2"
>
  <h2 class="mb-2 px-5 font-semibold">On this page</h2>

  <SegmentGroup.Root value="1" orientation="vertical" class="relative w-fit">
    {#each items as item}
      <SegmentGroup.Item
        value={item.value}
        class="relative text-neutral-400 transition-colors duration-200 data-checked:text-inherit"
      >
        <SegmentGroup.ItemText class="px-5">{item.label}</SegmentGroup.ItemText>
        <SegmentGroup.ItemControl />
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    {/each}

    <SegmentGroup.Indicator class="-left-px h-5 w-0.5 bg-indigo-500" />
  </SegmentGroup.Root>
</section>
