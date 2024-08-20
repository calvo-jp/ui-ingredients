<script lang="ts">
  import {Select} from '$lib/index.js';

  let items = [
    {value: '1', label: 'React'},
    {value: '2', label: 'Solid'},
    {value: '3', label: 'Svelte'},
    {value: '4', label: 'Angular', disabled: true},
    {value: '5', label: 'Vue'},
  ];

  let value: string[] = $state([]);

  $inspect(value);
</script>

<Select.Root
  {items}
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  itemToString={(item) => item.label}
  itemToValue={(item) => item.value}
  isItemDisabled={(item) => item.disabled ?? false}
  positioning={{
    sameWidth: true,
  }}
>
  <Select.Control class="max-w-[20rem]">
    <Select.Label class="mb-1 inline-block text-neutral-500"
      >Framework</Select.Label
    >
    <Select.Trigger
      class="flex h-11 w-full items-center gap-2 border px-3 text-left"
    >
      <Select.ValueText placeholder="Please Select" class="grow" />
      <Select.Indicator class="group">
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
      </Select.Indicator>
    </Select.Trigger>
  </Select.Control>

  <Select.Positioner>
    <Select.Content
      class="data-open:animate-fade-in data-closed:animate-fade-out border bg-neutral-800 px-3 py-2"
    >
      <Select.ItemGroup>
        <Select.ItemGroupLabel class="text-sm text-neutral-500"
          >Frameworks</Select.ItemGroupLabel
        >

        {#each items as item}
          <Select.Item
            {item}
            class="data-disabled:cursor-not-allowed data-disabled:opacity-75 flex cursor-default items-center"
          >
            <Select.ItemText class="grow" />
            <Select.ItemIndicator>
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
            </Select.ItemIndicator>
          </Select.Item>
        {/each}
      </Select.ItemGroup>
    </Select.Content>
  </Select.Positioner>
</Select.Root>
