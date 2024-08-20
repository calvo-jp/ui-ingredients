<script lang="ts">
  import {Combobox} from '$lib/index.js';

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
    items.filter((item) =>
      item.label.toLowerCase().includes(inputValue.toLowerCase()),
    ),
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
  <Combobox.Label class="mb-1 inline-block text-neutral-400"
    >Select Frameworks</Combobox.Label
  >
  <Combobox.Control class="flex max-w-[20rem]">
    <Combobox.Input class="h-11 grow border px-3" />
    <Combobox.Trigger
      class="group flex size-11 shrink-0 items-center justify-center border border-l-0"
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
        class="group-data-open:rotate-180 transition-transform duration-200"
      >
        <path d="M6 9L12 15L18 9"></path>
      </svg>
    </Combobox.Trigger>
    <Combobox.ClearTrigger
      class="flex size-11 shrink-0 items-center justify-center border border-l-0"
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
      >
        <path d="M17 7L7 17M7 7L17 17"></path>
      </svg>
    </Combobox.ClearTrigger>
  </Combobox.Control>
  <Combobox.Positioner>
    <Combobox.Content
      class="data-open:animate-fade-in data-closed:animate-fade-out border bg-neutral-800 px-3 py-2"
    >
      <Combobox.ItemGroup>
        <Combobox.ItemGroupLabel class="text-sm text-neutral-500"
          >Frameworks</Combobox.ItemGroupLabel
        >

        {#each matches as item}
          <Combobox.Item
            {item}
            class="data-disabled:cursor-not-allowed data-disabled:opacity-75 flex cursor-default items-center"
          >
            <Combobox.ItemText class="grow">{item.label}</Combobox.ItemText>
            <Combobox.ItemIndicator>
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
                class="h-5 w-5 text-green-600"
              >
                <path d="M20 6L9 17L4 12"></path>
              </svg>
            </Combobox.ItemIndicator>
          </Combobox.Item>
        {/each}
      </Combobox.ItemGroup>
    </Combobox.Content>
  </Combobox.Positioner>
</Combobox.Root>
