---
name: Field
description: A component for organizing related form elements into a cohesive unit.
---

### Input

```svelte
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
