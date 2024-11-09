# Select

A component for choosing an option from a dropdown list.

## Usage

```svelte
<script>
  import {Select} from 'ui-ingredients';
  import {CheckIcon, ChevronDownIcon} from '$lib/icons';

  let collection = Select.collection({
    items: [
      {value: '1', label: 'Option 1'},
      {value: '2', label: 'Option 2'},
      {value: '3', label: 'Option 3'},
      {value: '4', label: 'Option 4', disabled: true},
      {value: '5', label: 'Option 5'},
    ],
  });

  /** @type {string[]} */
  let value = $state([]);
</script>

<Select.Root
  {items}
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
  itemToString={function (item) {
    return item.label;
  }}
  itemToValue={function (item) {
    return item.value;
  }}
  isItemDisabled={function (item) {
    return item.disabled ?? false;
  }}
>
  <Select.Control>
    <Select.Label>Label</Select.Label>
    <Select.Trigger>
      <ChevronDownIcon />
    </Select.Trigger>
  </Select.Control>

  <Select.Positioner>
    <Select.Content>
      {#each collection.items as item}
        <Select.Item {item}>
          <Select.ItemText />
          <Select.ItemIndicator>
            <CheckIcon />
          </Select.ItemIndicator>
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Positioner>
</Select.Root>
```

### Using the `Field` component

```svelte
<script>
  import {Select, Field} from 'ui-ingredients';
  import {CheckIcon, ChevronDownIcon} from '$lib/icons';

  let items = [
    {value: '1', label: 'Item 1'},
    {value: '2', label: 'Item 2'},
    {value: '3', label: 'Item 3'},
    {value: '4', label: 'Item 4'},
    {value: '5', label: 'Item 5', disabled: true},
  ];
</script>

<Field.Root>
  <Select.Root
    {items}
    itemToString={function (item) {
      return item.label;
    }}
    itemToValue={function (item) {
      return item.value;
    }}
    isItemDisabled={function (item) {
      return item.disabled ?? false;
    }}
  >
    <Select.Control>
      <Select.Label>Label</Select.Label>
      <Select.Trigger>
        <ChevronDownIcon />
      </Select.Trigger>
    </Select.Control>

    <Select.Positioner>
      <Select.Content>
        {#each items as item}
          <Select.Item {item}>
            <Select.ItemText />
            <Select.ItemIndicator>
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>
        {/each}
      </Select.Content>
    </Select.Positioner>
  </Select.Root>

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```
