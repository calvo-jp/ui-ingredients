<script lang="ts">
  import {Combobox, Portal} from '$lib/index.js';
  import {
    CheckIcon,
    ChevronDownIcon,
    XCloseIcon,
  } from '@untitled-theme/icons-svelte';
  import {IconButton, Input, Label} from '../shared/index.js';

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
    },
    {
      label: 'Vue',
      value: 'vue',
    },
    {
      label: 'Angular',
      value: 'angular',
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
  lazyMount
>
  <Combobox.Label class="text-muted mb-1 inline-block font-medium">
    {#snippet asChild(attrs)}
      <Label {...attrs}>Select Frameworks</Label>
    {/snippet}
  </Combobox.Label>

  <Combobox.Control class="flex w-full gap-2 lg:max-w-[24rem]">
    <Combobox.Input>
      {#snippet asChild(attrs)}
        <Input {...attrs} />
      {/snippet}
    </Combobox.Input>
    <Combobox.Trigger class="group">
      {#snippet asChild(attrs)}
        <IconButton {...attrs}>
          <ChevronDownIcon
            class="group-data-open:rotate-180 transition-transform duration-200"
          />
        </IconButton>
      {/snippet}
    </Combobox.Trigger>
    <Combobox.ClearTrigger>
      {#snippet asChild(attrs)}
        <IconButton {...attrs}>
          <XCloseIcon />
        </IconButton>
      {/snippet}
    </Combobox.ClearTrigger>
  </Combobox.Control>

  <Portal data-id="combobox">
    <Combobox.Positioner>
      <Combobox.Content
        class="data-open:animate-fade-in data-closed:animate-fade-out bg-light rounded border p-2"
      >
        {#each matches as item (item.value)}
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
  </Portal>
</Combobox.Root>
