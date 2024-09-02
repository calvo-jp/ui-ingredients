# Combobox

A component that combines a text input with a dropdown list for selecting or entering values.

## Usage

```svelte
<script>
  import {Combobox} from 'ui-ingredients';
  import {CheckIcon, ChevronDownIcon, XCloseIcon} from '$lib/icons';

  let items = [
    {
      label: 'Item 1',
      value: '1',
    },
    {
      label: 'Item 2',
      value: '2',
    },
    {
      label: 'Item 3',
      value: 'value',
      disabled: true,
    },
  ];

  /** @type {string[]} */
  let value = $state([]);

  let inputValue = $state('');

  let matches = $derived(
    items.filter(function (item) {
      return item.label.toLowerCase().includes(inputValue.toLowerCase());
    }),
  );

  $inspect({
    value,
    inputValue,
  });
</script>

<Combobox.Root
  {items}
  {value}
  {inputValue}
  onValueChange={function (detail) {
    value = detail.value;
  }}
  onInputValueChange={function (detail) {
    inputValue = detail.inputValue;
  }}
  isItemDisabled={function (item) {
    return item.disabled ?? false;
  }}
  itemToString={function (item) {
    return item.label;
  }}
  itemToValue={function (item) {
    return item.value;
  }}
>
  <Combobox.Label>Label</Combobox.Label>

  <Combobox.Control>
    <Combobox.Input />
    <Combobox.Trigger>
      <ChevronDownIcon />
    </Combobox.Trigger>
    <Combobox.ClearTrigger>
      <XCloseIcon />
    </Combobox.ClearTrigger>
  </Combobox.Control>

  <Combobox.Positioner>
    <Combobox.Content>
      {#each matches as item (item.value)}
        <Combobox.Item {item}>
          <Combobox.ItemText>{item.label}</Combobox.ItemText>
          <Combobox.ItemIndicator>
            <CheckIcon />
          </Combobox.ItemIndicator>
        </Combobox.Item>
      {/each}
    </Combobox.Content>
  </Combobox.Positioner>
</Combobox.Root>
```

### Using the `Field` component

```svelte
<script>
  import {Combobox, Field} from 'ui-ingredients';
  import {CheckIcon, ChevronDownIcon, XCloseIcon} from '$lib/icons';

  let items = [
    {
      label: 'Item 1',
      value: '1',
    },
    {
      label: 'Item 2',
      value: '2',
    },
    {
      label: 'Item 3',
      value: 'value',
      disabled: true,
    },
  ];

  /** @type {string[]} */
  let value = $state([]);

  let inputValue = $state('');

  let matches = $derived(
    items.filter(function (item) {
      return item.label.toLowerCase().includes(inputValue.toLowerCase());
    }),
  );
</script>

<Field.Root>
  <Combobox.Root
    {items}
    {value}
    {inputValue}
    onValueChange={function (detail) {
      value = detail.value;
    }}
    onInputValueChange={function (detail) {
      inputValue = detail.inputValue;
    }}
    isItemDisabled={function (item) {
      return item.disabled ?? false;
    }}
    itemToString={function (item) {
      return item.label;
    }}
    itemToValue={function (item) {
      return item.value;
    }}
  >
    <Combobox.Label>Label</Combobox.Label>

    <Combobox.Control>
      <Combobox.Input />
      <Combobox.Trigger>
        <ChevronDownIcon />
      </Combobox.Trigger>
      <Combobox.ClearTrigger>
        <XCloseIcon />
      </Combobox.ClearTrigger>
    </Combobox.Control>

    <Combobox.Positioner>
      <Combobox.Content>
        {#each matches as item (item.value)}
          <Combobox.Item {item}>
            <Combobox.ItemText>{item.label}</Combobox.ItemText>
            <Combobox.ItemIndicator>
              <CheckIcon />
            </Combobox.ItemIndicator>
          </Combobox.Item>
        {/each}
      </Combobox.Content>
    </Combobox.Positioner>
  </Combobox.Root>

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```
