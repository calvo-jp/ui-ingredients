<script lang="ts">
  import {IconButton} from '$lib/ui';
  import {
    Bold01Icon,
    Italic01Icon,
    Underline01Icon,
  } from '@untitled-theme/icons-svelte';
  import {ToggleGroup} from 'ui-ingredients';
</script>

<ToggleGroup.Root multiple class="mx-auto flex w-fit">
  <ToggleGroup.Item class="rounded-r-none border-r-0" value="1">
    {#snippet asChild(attrs)}
      <IconButton {...attrs}>
        <Bold01Icon />
      </IconButton>
    {/snippet}
  </ToggleGroup.Item>
  <ToggleGroup.Item class="rounded-l-none rounded-r-none border-r-0" value="2">
    {#snippet asChild(attrs)}
      <IconButton {...attrs}>
        <Underline01Icon />
      </IconButton>
    {/snippet}
  </ToggleGroup.Item>
  <ToggleGroup.Item class="rounded-l-none" value="3">
    {#snippet asChild(attrs)}
      <IconButton {...attrs}>
        <Italic01Icon />
      </IconButton>
    {/snippet}
  </ToggleGroup.Item>
</ToggleGroup.Root>
