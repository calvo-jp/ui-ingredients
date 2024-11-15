<script lang="ts">
  import {SegmentGroup} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <SegmentGroup.Root
    value="1"
    orientation="horizontal"
    class="relative mx-auto flex w-fit"
  >
    {#each Array.from({length: 3}) as _, index}
      {@const value = (index + 1).toString()}

      <SegmentGroup.Item
        {value}
        class="relative z-10 px-4 py-1 font-medium transition-colors duration-200 data-checked:text-white"
      >
        <SegmentGroup.ItemText>Item {value}</SegmentGroup.ItemText>
        <SegmentGroup.ItemControl />
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    {/each}

    <SegmentGroup.Indicator
      class="bottom-0 h-full w-[var(--width)] rounded bg-neutral-800/50"
    />
  </SegmentGroup.Root>
</Container>
