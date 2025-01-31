<script lang="ts">
  import {Combobox, Portal} from '$lib/index.js';
  import {
    CheckIcon,
    ChevronDownIcon,
    XCloseIcon,
  } from '@untitled-theme/icons-svelte';
  import {IconButton, Input, Label} from '../shared/index.js';

  let items = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
    {label: 'Option 4', value: '4'},
    {label: 'Option 5', value: '5', disabled: true},
  ];

  let value: string[] = $state([]);
  let inputValue = $state('');

  let matches = $derived(
    items.filter((item) =>
      item.label.toLowerCase().includes(inputValue.toLowerCase()),
    ),
  );

  let collection = $derived(
    Combobox.collection({
      items: matches,
    }),
  );
</script>

<Combobox.Root
  {collection}
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  {inputValue}
  onInputValueChange={(detail) => {
    inputValue = detail.inputValue;
  }}
  positioning={{
    sameWidth: true,
  }}
  lazyMount
  placeholder="Please Select"
>
  <Combobox.Label>
    {#snippet asChild(attrs)}
      <Label {...attrs}>Label</Label>
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
            class="group-data-open:rotate-180 transition-transform duration-150"
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

  <Portal>
    <Combobox.Positioner>
      <Combobox.Content
        class="bg-light data-open:animate-fade-in data-closed:animate-fade-out rounded border p-2"
      >
        {#each collection.items as item}
          <Combobox.Item
            {item}
            class="data-disabled:text-disabled data-highlighted:bg-lighter/50 data-disabled:cursor-not-allowed flex cursor-default items-center rounded px-2.5 py-1"
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
