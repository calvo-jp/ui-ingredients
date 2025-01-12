---
title: Combobox
description: A component that combines a text input with a dropdown list for selecting or entering values.
---

# Combobox

A component that combines a text input with a dropdown list for selecting or entering values.

## Usage

```svelte
<script>
  import {Combobox} from 'ui-ingredients';
  import {CheckIcon, ChevronDownIcon, XCloseIcon} from '$lib/icons';

  let items = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
    {label: 'Option 4', value: '4'},
    {label: 'Option 5', value: '5'},
  ];

  /** @type {string[]} */
  let value = $state([]);

  let inputValue = $state('');

  let matches = $derived(
    items.filter(function (item) {
      return item.label.toLowerCase().includes(inputValue.toLowerCase());
    }),
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
  {inputValue}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  onInputValueChange={(detail) => {
    inputValue = detail.inputValue;
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
      {#each collection.items as item}
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

### Usage with Field component

```svelte
<script>
  import {Combobox, Portal} from 'ui-ingredients';
  import {CheckIcon, ChevronDownIcon, XCloseIcon} from '$lib/icons';

  let items = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
    {label: 'Option 4', value: '4'},
    {label: 'Option 5', value: '5'},
  ];

  /** @type {string[]} */
  let value = $state([]);

  let inputValue = $state('');

  let matches = $derived(
    items.filter(function (item) {
      return item.label.toLowerCase().includes(inputValue.toLowerCase());
    }),
  );

  let collection = $derived(
    Combobox.collection({
      items: matches,
    }),
  );
</script>

<Field.Root>
  <Combobox.Root
    {items}
    {value}
    {inputValue}
    onValueChange={(detail) => {
      value = detail.value;
    }}
    onInputValueChange={(detail) => {
      inputValue = detail.inputValue;
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
