<script lang="ts">
  import {Combobox, createFilter} from '$lib/index.js';
  import CheckIcon from '../check-icon.svelte';
  import ChevronDownIcon from '../chevron-down-icon.svelte';
  import XIcon from '../x-icon.svelte';

  let items = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
    {label: 'Option 4', value: '4'},
    {label: 'Option 5', value: '5', disabled: true},
  ];

  let value: string[] = $state([]);
  let inputValue = $state('');
  let filter = createFilter();
  let collection = $derived(Combobox.collection({items}));
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
    collection = Combobox.collection({items}).filter((item) => {
      return filter.contains(item, detail.inputValue);
    });
  }}
  positioning={{
    sameWidth: true,
  }}
  multiple
  lazyMount
  placeholder="Please Select"
>
  <Combobox.Label>Label</Combobox.Label>
  <Combobox.Control>
    <Combobox.Input />
    <Combobox.Trigger>
      <ChevronDownIcon style="width:20px;height:20px;" />
    </Combobox.Trigger>
    <Combobox.ClearTrigger>
      <XIcon style="width:20px;height:20px;" />
    </Combobox.ClearTrigger>
  </Combobox.Control>
  <Combobox.Positioner>
    <Combobox.Content>
      {#each collection.items as item}
        <Combobox.Item {item}>
          <Combobox.ItemText>{item.label}</Combobox.ItemText>
          <Combobox.ItemIndicator>
            <CheckIcon
              style="width:16px;height:16px;color:var(--color-success);"
            />
          </Combobox.ItemIndicator>
        </Combobox.Item>
      {/each}
    </Combobox.Content>
  </Combobox.Positioner>
</Combobox.Root>

<style>
  :global([data-scope='combobox'][data-part='control']) {
    max-width: 350px;
    display: flex;
    gap: 8px;
  }

  :global([data-scope='combobox'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='combobox'][data-part='input']) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
    flex-grow: 1;
  }

  :global(
    [data-scope='combobox'][data-part='trigger'],
    [data-scope='combobox'][data-part='clear-trigger']
  ) {
    width: 40px;
    height: 40px;
    border: 1px solid var(--border-default);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global([data-scope='combobox'][data-part='trigger'] > svg) {
    transition: transform 250ms;
  }

  :global(
    [data-scope='combobox'][data-part='trigger'][data-state='open'] > svg
  ) {
    transform: rotate(180deg);
  }

  :global([data-scope='combobox'][data-part='content']) {
    padding: 8px;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='combobox'][data-part='item']) {
    padding: 2px 4px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  :global([data-scope='combobox'][data-part='item-text']) {
    flex-grow: 1;
  }

  :global([data-scope='combobox'][data-part='item'][data-disabled]) {
    opacity: 0.75;
    cursor: not-allowed;
  }
</style>
