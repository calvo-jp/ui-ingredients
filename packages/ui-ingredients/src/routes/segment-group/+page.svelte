<script lang="ts">
  import {SegmentGroup} from '$lib/index.js';

  let frameworks = ['React', 'Solid', 'Vue', 'Svelte', 'Angular'];

  let value = $state(frameworks[0]);

  $inspect(value);
</script>

<SegmentGroup.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
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
