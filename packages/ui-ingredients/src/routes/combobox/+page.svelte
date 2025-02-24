<script lang="ts">
  import {Combobox} from '$lib/index.js';

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
  multiple
  lazyMount
  placeholder="Please Select"
>
  <Combobox.Label>Label</Combobox.Label>
  <Combobox.Control>
    <Combobox.Input />
    <Combobox.Trigger>Open</Combobox.Trigger>
    <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
  </Combobox.Control>
  <Combobox.Positioner>
    <Combobox.Content>
      {#each collection.items as item}
        <Combobox.Item {item}>
          <Combobox.ItemText>{item.label}</Combobox.ItemText>
          <Combobox.ItemIndicator>✅</Combobox.ItemIndicator>
        </Combobox.Item>
      {/each}
    </Combobox.Content>
  </Combobox.Positioner>
</Combobox.Root>
