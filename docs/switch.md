# Switch

A component for toggling between two states, such as on/off or enabled/disabled.

## Usage

```svelte
<script>
  import {Switch} from 'ui-ingredients';

  let checked = $state(false);
</script>

<Switch.Root
  {checked}
  onCheckedChange={function (detail) {
    checked = detail.checked;
  }}
>
  <Switch.Control>
    <Switch.Thumb />
  </Switch.Control>
  <Switch.Label>Label</Switch.Label>
  <Switch.HiddenInput />
</Switch.Root>
```

### Using the `Field` component

```svelte
<script>
  import {Switch, Field} from 'ui-ingredients';
</script>

<Field.Root>
  <Switch.Root>
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.Label>Label</Switch.Label>
    <Switch.HiddenInput />
  </Switch.Root>

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```
