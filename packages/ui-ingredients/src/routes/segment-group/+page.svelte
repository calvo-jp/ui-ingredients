<script lang="ts">
  import {SegmentGroup} from '$lib/index.js';

  let frameworks = [
    /**/
    'React',
    'Solid',
    'Svelte',
    'Vue',
    'Angular',
  ];
</script>

<SegmentGroup.Root
  value="React"
  orientation="horizontal"
  class="relative flex w-fit gap-1 border-b pb-2"
>
  <SegmentGroup.Indicator
    class="-bottom-px h-0.5 w-[var(--width)] bg-indigo-500"
  />

  {#each frameworks as framework}
    <SegmentGroup.Item
      value={framework}
      class="data-checked:text-indigo-400 data-checked:font-semibold px-1 font-medium"
    >
      <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  {/each}
</SegmentGroup.Root>
