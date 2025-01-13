---
title: Pin Input
description: A component for entering and displaying a sequence of numeric or alphanumeric characters, often used for PINs or codes.
---

## Usage

```svelte
<script>
  import {PinInput} from 'ui-ingredients';
</script>

<PinInput.Root>
  <PinInput.Label>Label</PinInput.Label>
  <PinInput.Input index={0} />
  <PinInput.Input index={1} />
  <PinInput.Input index={2} />
  <PinInput.Input index={3} />
  <PinInput.HiddenInput />
</PinInput.Root>
```

### Usage with Field component

```svelte
<script>
  import {PinInput} from 'ui-ingredients';
</script>

<Field.Root>
  <PinInput.Root>
    <PinInput.Label>Label</PinInput.Label>
    <PinInput.Input index={0} />
    <PinInput.Input index={1} />
    <PinInput.Input index={2} />
    <PinInput.Input index={3} />
    <PinInput.HiddenInput />
  </PinInput.Root>

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```
