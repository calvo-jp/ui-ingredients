<script lang="ts">
  import {SegmentGroup} from 'ui-ingredients';
</script>

<SegmentGroup.Root
  value="1"
  orientation="horizontal"
  class="relative mx-auto flex w-fit"
>
  {#each Array.from({length: 3}) as _, index}
    {@const value = (index + 1).toString()}

    <SegmentGroup.Item
      {value}
      class="relative z-10 px-4 py-1 font-medium transition-colors duration-150 ui-checked:text-neutral-900 dark:ui-checked:text-white"
    >
      <SegmentGroup.ItemText>Item {value}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  {/each}

  <SegmentGroup.Indicator
    class="bottom-0 h-full w-[var(--width)] rounded bg-neutral-100 dark:bg-neutral-800/50"
  />
</SegmentGroup.Root>
