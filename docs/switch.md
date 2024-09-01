# Switch

A component for toggling between two states, such as on/off or enabled/disabled.

## Usage

```svelte
<script>
  import {Switch} from 'ui-ingredients';

  let checked = $state(false);

  $inspect(checked);
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
