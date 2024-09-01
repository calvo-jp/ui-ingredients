# Checkbox

An interactive component for selecting one or multiple options in a list.

## Usage

```svelte
<script>
  import {Checkbox} from 'ui-ingredients';
  import {CheckIcon} from '$lib/icons';

  let checked = $state(false);

  $inspect(checked);
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
