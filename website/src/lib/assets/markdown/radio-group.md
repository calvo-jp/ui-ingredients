---
title: Radio Group
description: A component for selecting one option from a set of mutually exclusive choices.
---

## Usage

```svelte
<script>
  import {RadioGroup} from 'ui-ingredients';
  import {CheckIcon} from '$lib/icons';

  let items = [
    {
      value: '1',
      label: 'Item 1',
    },
    {
      value: '2',
      label: 'Item 2',
    },
    {
      value: '3',
      label: 'Item 3',
    },
  ];
</script>

<RadioGroup.Root>
  <RadioGroup.Label>Label</RadioGroup.Label>

  {#each items as { value, label }}
    <RadioGroup.Item {value}>
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl>
        <CheckIcon />
      </RadioGroup.ItemControl>
      <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
    </RadioGroup.Item>
  {/each}
</RadioGroup.Root>
```
