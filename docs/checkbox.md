# Checkbox

## Usage

```svelte
<script>
  import {Checkbox} from 'ui-ingredients';
  import {CheckIcon} from '$lib/icons';

  let checked = $state(false);

  $inspect(checked);
</script>

<Field.Root>
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
</Field.Root>
```
