# Checkbox

An interactive component for selecting one or multiple options in a list.

## Usage

```svelte
<script>
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

### Using the `Field` component

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

## Props

### Root

- `ids`

  The ids of the elements

- `form`

  The id of the form that the checkbox belongs to.

- `name`

  The name of the input field in a checkbox.

- `value`

  The value of checkbox input. Useful for form submission.

- `checked`

  The checked state of the checkbox

- `invalid`

  Whether the checkbox is invalid

- `disabled`

  Whether the checkbox is disabled

- `readOnly`

  Whether the checkbox is read-only

- `required`

  Whether the checkbox is required

- `onCheckedChange`

  The callback invoked when the checked state changes.
