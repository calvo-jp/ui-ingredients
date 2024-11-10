---
name: PinInput
description: A component for entering and displaying a sequence of numeric or alphanumeric characters, often used for PINs or codes.
---

```svelte
<script lang="ts">
  import {PinInput} from 'ui-ingredients';
  import {Input, Label} from '../shared/index.js';

  let value: string[] = $state([]);
</script>

<PinInput.Root
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
>
  <PinInput.Label>Label</PinInput.Label>
  <PinInput.Input index={0} />
  <PinInput.Input index={1} />
  <PinInput.Input index={2} />
  <PinInput.Input index={3} />
  <PinInput.HiddenInput />
</PinInput.Root>
```

### Usage with `Field` component

```svelte
<script lang="ts">
  import {PinInput} from 'ui-ingredients';
  import {Input, Label} from '../shared/index.js';
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
