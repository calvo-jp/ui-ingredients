<script lang="ts">
  import {Select} from '$lib/index.js';
  import {CheckIcon, ChevronDownIcon} from '@untitled-theme/icons-svelte';
  import {Button, Label} from '../shared/index.js';

  let items = [
    {value: '1', label: 'React'},
    {value: '2', label: 'Solid'},
    {value: '3', label: 'Svelte'},
    {value: '4', label: 'Angular', disabled: true},
    {value: '5', label: 'Vue'},
  ];

  let value: string[] = $state([]);
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
  <Select.Control class="w-full lg:max-w-[24rem]">
    <Select.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Framework</Label>
      {/snippet}
    </Select.Label>
    <Select.Trigger class="w-full text-left font-normal">
      {#snippet asChild(attrs)}
        <Button {...attrs}>
          <Select.ValueText placeholder="Please Select" class="grow" />
          <Select.Indicator class="group">
            <ChevronDownIcon
              class="group-data-open:rotate-180 transition-transform duration-200"
            />
          </Select.Indicator>
        </Button>
      {/snippet}
    </Select.Trigger>
  </Select.Control>

  <Select.Positioner>
    <Select.Content
      class="data-open:animate-fade-in data-closed:animate-fade-out bg-light rounded border p-2"
    >
      {#each items as item}
        <Select.Item
          {item}
          class="data-disabled:cursor-not-allowed data-disabled:opacity-75 data-highlighted:bg-lighter/50 flex cursor-default items-center rounded px-2.5 py-1"
        >
          <Select.ItemText class="grow" />
          <Select.ItemIndicator>
            <CheckIcon class="text-success size-5" />
          </Select.ItemIndicator>
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Positioner>
</Select.Root>
