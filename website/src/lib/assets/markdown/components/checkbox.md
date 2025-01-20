---
id: checkbox
title: Checkbox
description: An interactive component for selecting one or multiple options in a list.
---

## Usage

```svelte
<script>
  import {Checkbox} from 'ui-ingredients';
  import {CheckIcon} from '$lib/icons';
</script>

<Checkbox.Root>
  <Checkbox.Control>
    <Checkbox.Indicator>
      <CheckIcon />
    </Checkbox.Indicator>
  </Checkbox.Control>
  <Checkbox.Label>Label</Checkbox.Label>
  <Checkbox.HiddenInput />
</Checkbox.Root>
```

### Usage with Field component

```svelte
<script>
  import {Checkbox, Field} from 'ui-ingredients';
  import {CheckIcon} from '$lib/icons';
</script>

<Field.Root>
  <Checkbox.Root>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label>Label</Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```
