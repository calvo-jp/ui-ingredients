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

  let inputValue = $state('');

  let matches = $derived(
    items.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase())),
  );
</script>

<Combobox.Root
  {items}
  isItemDisabled={(item) => item.disabled ?? false}
  itemToString={(item) => item.label}
  itemToValue={(item) => item.value}
  positioning={{
    sameWidth: true,
  }}
  {inputValue}
  onInputValueChange={(detail) => {
    inputValue = detail.inputValue;
  }}
>
  <Combobox.Label class="inline-block mb-1 text-gray-700">Select a Frameworks</Combobox.Label>
  <Combobox.Control class="flex max-w-[20rem]">
    <Combobox.Input class="border grow h-11 px-3" />
    <Combobox.Trigger
      class="group border shrink-0 border-l-0 size-11 flex items-center justify-center"
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
      class="border shrink-0 border-l-0 size-11 flex items-center justify-center"
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
    <Combobox.Content class="border py-2 px-3">
      <Combobox.ItemGroup>
        <Combobox.ItemGroupLabel class="text-gray-500 text-sm">Frameworks</Combobox.ItemGroupLabel>

        {#each matches as item}
          <Combobox.Item
            {item}
            class="flex items-center cursor-default data-disabled:cursor-not-allowed data-disabled:opacity-75"
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
                class="w-5 h-5 text-green-500"
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
