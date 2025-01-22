<script lang="ts">
  import IconButton from '$lib/components/ui/icon-button.svelte';
  import Input from '$lib/components/ui/input.svelte';
  import Label from '$lib/components/ui/label.svelte';
  import {
    CheckIcon,
    ChevronDownIcon,
    XCloseIcon,
  } from '@untitled-theme/icons-svelte';
  import {Combobox, Portal} from 'ui-ingredients';

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
            class="transition-transform duration-150 ui-group-open:rotate-180"
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
        class="rounded border border-neutral-200 bg-white p-2 ui-open:animate-fade-in ui-closed:animate-fade-out dark:border-neutral-800 dark:bg-neutral-900"
      >
        {#each collection.items as item}
          <Combobox.Item
            {item}
            class="flex cursor-default items-center rounded px-2.5 py-1 ui-disabled:cursor-not-allowed ui-disabled:text-neutral-400 ui-highlighted:bg-neutral-50 dark:ui-disabled:text-neutral-500 dark:ui-highlighted:bg-neutral-800/50"
          >
            <Combobox.ItemText class="grow">{item.label}</Combobox.ItemText>
            <Combobox.ItemIndicator>
              <CheckIcon class="size-5 text-green-600 dark:text-green-500" />
            </Combobox.ItemIndicator>
          </Combobox.Item>
        {/each}
      </Combobox.Content>
    </Combobox.Positioner>
  </Portal>
</Combobox.Root>
