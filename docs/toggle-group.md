# ToggleGroup

## Usage

```svelte
<script>
  import {ToggleGroup} from 'ui-ingredients';
  import {Bold01Icon, Italic01Icon, Underline01Icon} from '$lib/icons';

  /** @type {string[]} */
  let value = $state([]);

  $inspect(value);
</script>

<ToggleGroup.Root
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
  multiple
>
  <ToggleGroup.Item value="1">
    <Bold01Icon />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="2">
    <Underline01Icon />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="3">
    <Italic01Icon />
  </ToggleGroup.Item>
</ToggleGroup.Root>
```
