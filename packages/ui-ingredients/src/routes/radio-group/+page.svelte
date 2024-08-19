<script lang="ts">
  import {RadioGroup} from '$lib/index.js';

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
  <RadioGroup.Label class="inline-block mb-1.5 text-neutral-400">Choose one</RadioGroup.Label>

  <div class="flex flex-col gap-1">
    {#each items as { value, label }}
      <RadioGroup.Item {value} class="flex gap-2 items-center">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemControl
          class="border-2 size-5 rounded-full group flex items-center justify-center p-2 data-checked:bg-indigo-500 data-checked:border-indigo-500 transition-colors duration-200"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-3.5 shrink-0 hidden group-data-checked:block text-white"
          >
            <path d="M20 6L9 17L4 12"></path>
          </svg>
        </RadioGroup.ItemControl>
        <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
      </RadioGroup.Item>
    {/each}
  </div>
</RadioGroup.Root>
