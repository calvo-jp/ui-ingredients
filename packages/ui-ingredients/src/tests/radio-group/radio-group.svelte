<script lang="ts">
  import {RadioGroup} from '$lib/index.js';

  interface Item {
    value: string;
    label: string;
  }

  interface Props {
    items: Item[];
  }

  let {items}: Props = $props();
</script>

<RadioGroup.Root>
  <RadioGroup.Label>Label</RadioGroup.Label>
  <RadioGroup.Indicator />

  {#each items as { value, label }}
    <RadioGroup.Item {value}>
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl></RadioGroup.ItemControl>
      <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
    </RadioGroup.Item>
  {/each}
</RadioGroup.Root>
