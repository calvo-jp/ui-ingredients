<script lang="ts">
  import {ToggleGroup} from '$lib/index.js';

  let value: string[] = $state([]);
</script>

<ToggleGroup.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  multiple
>
  <ToggleGroup.Item value="1">A</ToggleGroup.Item>
  <ToggleGroup.Item value="2">B</ToggleGroup.Item>
  <ToggleGroup.Item value="3">C</ToggleGroup.Item>
</ToggleGroup.Root>
