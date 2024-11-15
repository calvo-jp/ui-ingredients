<script lang="ts">
  import {IconButton, Input, Label} from '$lib/ui';
  import {
    CheckIcon,
    ChevronDownIcon,
    XCloseIcon,
  } from '@untitled-theme/icons-svelte';
  import {Combobox, Portal} from 'ui-ingredients';
  import Container from './container.svelte';

  let items = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
    {label: 'Option 4', value: '4'},
    {label: 'Option 5', value: '5', disabled: true},
  ];

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

<Container>
  <Combobox.Root
    {collection}
    {inputValue}
    onInputValueChange={(detail) => {
      inputValue = detail.inputValue;
    }}
    positioning={{
      sameWidth: true,
    }}
    lazyMount
    placeholder="Please Select"
    class="mx-auto w-full max-w-[20rem]"
  >
    <Combobox.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
      {/snippet}
    </Combobox.Label>

    <Combobox.Control class="flex gap-2">
      <Combobox.Input class="grow">
        {#snippet asChild(attrs)}
          <Input {...attrs} />
        {/snippet}
      </Combobox.Input>
      <Combobox.Trigger class="group">
        {#snippet asChild(attrs)}
          <IconButton {...attrs}>
            <ChevronDownIcon
              class="transition-transform duration-200 group-data-open:rotate-180"
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
          class="rounded border border-neutral-800 bg-neutral-900 p-2 data-open:animate-fade-in data-closed:animate-fade-out"
        >
          {#each collection.items as item}
            <Combobox.Item
              {item}
              class="flex cursor-default items-center rounded px-2.5 py-1 data-disabled:cursor-not-allowed data-disabled:text-neutral-500 data-highlighted:bg-neutral-800/50"
            >
              <Combobox.ItemText class="grow">{item.label}</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <CheckIcon class="size-5 text-green-500" />
              </Combobox.ItemIndicator>
            </Combobox.Item>
          {/each}
        </Combobox.Content>
      </Combobox.Positioner>
    </Portal>
  </Combobox.Root>
</Container>
