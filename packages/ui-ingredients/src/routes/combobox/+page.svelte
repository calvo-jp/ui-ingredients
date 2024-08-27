<script lang="ts">
  import {Combobox} from '$lib/index.js';
  import {CheckIcon, ChevronDownIcon, XCloseIcon} from '@untitled-theme/icons-svelte';

  let items = [
    {
      label: 'React',
      value: 'react',
    },
    {
      label: 'Solid',
      value: 'solid',
    },
    {
      label: 'Svelte',
      value: 'svelte',
      disabled: true,
    },
  ];

  let value: string[] = $state([]);

  let inputValue = $state('');

  let matches = $derived(
    items.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase())),
  );

  $inspect({
    value,
    inputValue,
  });
</script>

<Combobox.Root
  {items}
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  {inputValue}
  onInputValueChange={(detail) => {
    inputValue = detail.inputValue;
  }}
  isItemDisabled={(item) => item.disabled ?? false}
  itemToString={(item) => item.label}
  itemToValue={(item) => item.value}
  positioning={{
    sameWidth: true,
  }}
>
  <Combobox.Label class="text-muted mb-1 inline-block font-medium">Select Frameworks</Combobox.Label
  >
  <Combobox.Control class="flex w-full gap-2 lg:max-w-[24rem]">
    <Combobox.Input class="h-12 grow rounded border px-3.5" />
    <Combobox.Trigger
      class="group flex size-12 shrink-0 items-center justify-center rounded border"
    >
      <ChevronDownIcon class="size-5" />
    </Combobox.Trigger>
    <Combobox.ClearTrigger class="flex size-12 shrink-0 items-center justify-center rounded border">
      <XCloseIcon class="size-5" />
    </Combobox.ClearTrigger>
  </Combobox.Control>
  <Combobox.Positioner>
    <Combobox.Content
      class="data-open:animate-fade-in data-closed:animate-fade-out bg-light rounded border p-2"
    >
      {#each matches as item}
        <Combobox.Item
          {item}
          class="data-disabled:cursor-not-allowed data-disabled:text-disabled data-highlighted:bg-lighter/50 flex cursor-default items-center rounded px-2.5 py-1"
        >
          <Combobox.ItemText class="grow">{item.label}</Combobox.ItemText>
          <Combobox.ItemIndicator>
            <CheckIcon class="text-success size-5" />
          </Combobox.ItemIndicator>
        </Combobox.Item>
      {/each}
    </Combobox.Content>
  </Combobox.Positioner>
</Combobox.Root>
