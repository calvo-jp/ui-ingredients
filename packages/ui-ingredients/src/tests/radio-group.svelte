<script lang="ts">
  import {RadioGroup} from '$lib/index.js';
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

<RadioGroup.Root>
  <RadioGroup.Label>Label</RadioGroup.Label>
  <RadioGroup.Indicator />

  {#each items as { value, label }}
    <RadioGroup.Item {value}>
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl>
        <CheckIcon />
      </RadioGroup.ItemControl>
      <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
    </RadioGroup.Item>
  {/each}
</RadioGroup.Root>
