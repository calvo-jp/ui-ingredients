# Select

## Usage

```svelte
<script>
  import {Select} from 'ui-ingredients';
  import {CheckIcon, ChevronDownIcon} from '$lib/icons';

  let items = [
    {value: '1', label: 'Item 1'},
    {value: '2', label: 'Item 2'},
    {value: '3', label: 'Item 3'},
    {value: '4', label: 'Item 4'},
    {value: '5', label: 'Item 5', disabled: true},
  ];

  /** @type {string[]} */
  let value = $state([]);

  $inspect(value);
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
```
