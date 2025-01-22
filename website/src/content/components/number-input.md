---
id: number-input
title: Number Input
description: A component for entering numeric values
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {NumberInput} from 'ui-ingredients';
  import {ChevronDownIcon, ChevronUpIcon} from '$lib/icons';
</script>

<NumberInput.Root>
  <NumberInput.Label>Label</NumberInput.Label>
  <NumberInput.Control>
    <NumberInput.Input />
    <NumberInput.IncrementTrigger>
      <ChevronUpIcon />
    </NumberInput.IncrementTrigger>
    <NumberInput.DecrementTrigger>
      <ChevronDownIcon />
    </NumberInput.DecrementTrigger>
  </NumberInput.Control>
</NumberInput.Root>
```

### Usage with Field component

```svelte
<script>
  import {NumberInput, Field} from 'ui-ingredients';
  import {ChevronDownIcon, ChevronUpIcon} from '$lib/icons';
</script>

<Field.Root>
  <NumberInput.Root>
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Control>
      <NumberInput.Input />
      <NumberInput.IncrementTrigger>
        <ChevronUpIcon />
      </NumberInput.IncrementTrigger>
      <NumberInput.DecrementTrigger>
        <ChevronDownIcon />
      </NumberInput.DecrementTrigger>
    </NumberInput.Control>
  </NumberInput.Root>

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```

## API Reference

<api>

## Accessibility

### Keyboard Support

<keyboard-support>
