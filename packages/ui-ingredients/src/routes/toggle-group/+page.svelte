<script lang="ts">
  import {ToggleGroup} from '$lib/index.js';
  import {Bold01Icon, Italic01Icon, Underline01Icon} from '@untitled-theme/icons-svelte';

  let value: string[] = $state([]);

  $inspect(value);
</script>

<ToggleGroup.Root
  class="flex"
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  multiple
>
  <ToggleGroup.Item
    class="aria-pressed:bg-light/25 flex size-12 items-center justify-center rounded-l border"
    value="1"
  >
    <Bold01Icon />
  </ToggleGroup.Item>
  <ToggleGroup.Item
    class="aria-pressed:bg-light/25 flex size-12 items-center justify-center border border-l-0 transition-colors duration-200"
    value="2"
  >
    <Underline01Icon />
  </ToggleGroup.Item>
  <ToggleGroup.Item
    class="aria-pressed:bg-light/25 flex size-12 items-center justify-center rounded-r border border-l-0 transition-colors duration-200"
    value="3"
  >
    <Italic01Icon />
  </ToggleGroup.Item>
</ToggleGroup.Root>
