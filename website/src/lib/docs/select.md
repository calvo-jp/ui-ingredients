---
name: Select
description: A component for choosing an option from a dropdown list.
---

## Usage

```svelte
<script lang="ts">
  import {Select} from 'ui-ingredients';
  import {CheckIcon, ChevronDownIcon} from '$lib/icons';

  let collection = Select.collection({
    items: [
      {value: '1', label: 'Option 1'},
      {value: '2', label: 'Option 2'},
      {value: '3', label: 'Option 3'},
      {value: '4', label: 'Option 4'},
      {value: '5', label: 'Option 5'},
    ],
  });

  let value: string[] = $state([]);
</script>

<Select.Root
  {collection}
  {value}
  onValueChange={function (detail) {
    value = detail.value;
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

### Usage with `Field` component

```svelte
<script lang="ts">
  import {Select} from 'ui-ingredients';
  import {CheckIcon, ChevronDownIcon} from '$lib/icons';

  let collection = Select.collection({
    items: [
      {value: '1', label: 'Option 1'},
      {value: '2', label: 'Option 2'},
      {value: '3', label: 'Option 3'},
      {value: '4', label: 'Option 4'},
      {value: '5', label: 'Option 5'},
    ],
  });

  let value: string[] = $state([]);
</script>

<Field.Root>
  <Select.Root
    {collection}
    {value}
    onValueChange={function (detail) {
      value = detail.value;
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