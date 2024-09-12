<script lang="ts">
  import {Portal, Select} from '$lib/index.js';
  import {
    CheckIcon,
    ChevronDownIcon,
    XCloseIcon,
  } from '@untitled-theme/icons-svelte';
  import {Button, IconButton, Label} from '../shared/index.js';

  let items = $state([
    {value: '1', label: 'React'},
    {value: '2', label: 'Solid'},
    {value: '3', label: 'Svelte'},
    {value: '4', label: 'Angular', disabled: true},
  ]);

  let value: string[] = $state([]);

  $inspect(value);

  setTimeout(() => {
    value = ['1'];
    items = [...items, {value: '5', label: 'Vue'}];
  }, 1000);
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
  lazyMount
  keepMounted={false}
>
  <Select.Control class="w-full lg:max-w-[24rem]">
    <Select.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Framework</Label>
      {/snippet}
    </Select.Label>
    <div class="flex gap-2">
      <Select.Trigger class="grow text-left font-normal">
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
      <Select.ClearTrigger>
        {#snippet asChild(attrs)}
          <IconButton {...attrs}>
            <XCloseIcon />
          </IconButton>
        {/snippet}
      </Select.ClearTrigger>
    </div>
  </Select.Control>

  <Portal data-id="select">
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
  </Portal>
</Select.Root>
