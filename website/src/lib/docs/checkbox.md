---
name: Checkbox
description: An interactive component for selecting one or multiple options in a list.
---

```svelte
<script lang="ts">
  import {Checkbox} from 'ui-ingredients';
  import {CheckIcon} from '$lib/icons';

  let checked = $state(false);
</script>

<Checkbox.Root
  {checked}
  onCheckedChange={function (detail) {
    checked = detail.checked;
  }}
>
  <Checkbox.Control>
    <Checkbox.Indicator>
      <CheckIcon />
    </Checkbox.Indicator>
  </Checkbox.Control>
  <Checkbox.Label>Label</Checkbox.Label>
  <Checkbox.HiddenInput />
</Checkbox.Root>
```

### Usage with `Field` component

```svelte
<script lang="ts">
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
