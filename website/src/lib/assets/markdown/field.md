---
title: Field
description: A component for organizing related form elements into a cohesive unit.
---

# Field

A component for organizing related form elements into a cohesive unit.

## Usage

### Input

```svelte
<script>
  import {Field} from 'ui-ingredients';
</script>

<Field.Root>
  <Field.Label>
    Label
    <Field.RequiredIndicator />
  </Field.Label>
  <Field.Input />
  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```

### Select

```svelte
<script>
  import {Field} from 'ui-ingredients';
</script>

<Field.Root>
  <Field.Label>
    Label
    <Field.RequiredIndicator />
  </Field.Label>
  <Field.Select />
  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```

### Textarea

```svelte
<script>
  import {Field} from 'ui-ingredients';
</script>

<Field.Root>
  <Field.Label>
    Label
    <Field.RequiredIndicator />
  </Field.Label>
  <Field.Textarea autoResize />
  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```
