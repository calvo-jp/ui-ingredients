---
name: ToggleGroup
description: A component for grouping multiple toggle switches, allowing users to switch between different options or states.
---

## Usage

```svelte
<script lang="ts">
  import {ToggleGroup} from 'ui-ingredients';
  import {Bold01Icon, Italic01Icon, Underline01Icon} from '$lib/icons';

  let value: string[] = $state([]);
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
