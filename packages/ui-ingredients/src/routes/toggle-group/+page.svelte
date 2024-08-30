<script lang="ts">
  import {ToggleGroup} from '$lib/index.js';
  import {
    Bold01Icon,
    Italic01Icon,
    Underline01Icon,
  } from '@untitled-theme/icons-svelte';
  import {IconButton} from '../shared/index.js';

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
    class="aria-pressed:bg-light/25 rounded-r-none border-r-0"
    value="1"
  >
    {#snippet asChild(attrs)}
      <IconButton {...attrs}>
        <Bold01Icon />
      </IconButton>
    {/snippet}
  </ToggleGroup.Item>
  <ToggleGroup.Item
    class="aria-pressed:bg-light/25 rounded-l-none rounded-r-none border-r-0"
    value="2"
  >
    {#snippet asChild(attrs)}
      <IconButton {...attrs}>
        <Underline01Icon />
      </IconButton>
    {/snippet}
  </ToggleGroup.Item>
  <ToggleGroup.Item class="aria-pressed:bg-light/25 rounded-l-none" value="3">
    {#snippet asChild(attrs)}
      <IconButton {...attrs}>
        <Italic01Icon />
      </IconButton>
    {/snippet}
  </ToggleGroup.Item>
</ToggleGroup.Root>
