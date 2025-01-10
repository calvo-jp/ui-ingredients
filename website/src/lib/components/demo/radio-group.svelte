<script lang="ts">
  import {CheckIcon} from '@untitled-theme/icons-svelte';
  import {RadioGroup} from 'ui-ingredients';

  let items = [
    {value: '1', label: 'Option 1'},
    {value: '2', label: 'Option 2'},
    {value: '3', label: 'Option 3'},
  ];
</script>

<RadioGroup.Root class="mx-auto w-fit space-y-1">
  {#each items as { value, label }}
    <RadioGroup.Item {value} class="flex items-center gap-2">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl
        class="group flex size-5 items-center justify-center rounded-full border-2 border-neutral-200 bg-white p-2 transition-colors duration-150 ui-checked:border-indigo-600 ui-checked:bg-indigo-600 dark:border-neutral-700 dark:bg-transparent dark:ui-checked:border-indigo-500 dark:ui-checked:bg-indigo-500"
      >
        <CheckIcon
          class="hidden size-3.5 shrink-0 text-white ui-group-checked:block"
        />
      </RadioGroup.ItemControl>
      <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
    </RadioGroup.Item>
  {/each}
</RadioGroup.Root>
