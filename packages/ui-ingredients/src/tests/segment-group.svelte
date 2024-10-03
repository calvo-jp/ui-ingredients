<script lang="ts">
  import {SegmentGroup} from '$lib/index.js';
  import {CheckIcon} from '@untitled-theme/icons-svelte';

  interface Item {
    value: string;
    label: string;
  }

  interface Props {
    items: Item[];
  }

  let {items}: Props = $props();
</script>

<SegmentGroup.Root>
  <SegmentGroup.Label>Label</SegmentGroup.Label>
  <SegmentGroup.Indicator />

  {#each items as { value, label }}
    <SegmentGroup.Item {value}>
      <SegmentGroup.ItemHiddenInput />
      <SegmentGroup.ItemControl>
        <CheckIcon />
      </SegmentGroup.ItemControl>
      <SegmentGroup.ItemText>{label}</SegmentGroup.ItemText>
    </SegmentGroup.Item>
  {/each}
</SegmentGroup.Root>
