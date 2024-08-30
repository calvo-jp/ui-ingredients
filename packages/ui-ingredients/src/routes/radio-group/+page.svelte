<script lang="ts">
  import {RadioGroup} from '$lib/index.js';
  import {CheckIcon} from '@untitled-theme/icons-svelte';
  import {Label} from '../shared/index.js';

  let items = [
    {value: '1', label: 'Item 1'},
    {value: '2', label: 'Item 2'},
    {value: '3', label: 'Item 3'},
  ];

  let value = $state('1');

  $inspect(value);
</script>

<RadioGroup.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <RadioGroup.Label>
    {#snippet asChild(attrs)}
      <Label {...attrs}>Choose one</Label>
    {/snippet}
  </RadioGroup.Label>

  <div class="flex flex-col gap-1">
    {#each items as { value, label }}
      <RadioGroup.Item {value} class="flex items-center gap-2">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemControl
          class="data-checked:bg-accent data-checked:border-accent group flex size-5 items-center justify-center rounded-full border-2 p-2 transition-colors duration-200"
        >
          <CheckIcon
            class="group-data-checked:block hidden size-3.5 shrink-0 text-white"
          />
        </RadioGroup.ItemControl>
        <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
      </RadioGroup.Item>
    {/each}
  </div>
</RadioGroup.Root>
