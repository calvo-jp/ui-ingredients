<script lang="ts">
  import {IconButton, Input, Label} from '$lib/ui';
  import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';
  import {Clipboard} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Clipboard.Root value="UI Ingredients" class="mx-auto max-w-[20rem]">
    <Clipboard.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
      {/snippet}
    </Clipboard.Label>

    <Clipboard.Control class="flex gap-2">
      <Clipboard.Input class="grow">
        {#snippet asChild(attrs)}
          <Input {...attrs} />
        {/snippet}
      </Clipboard.Input>

      <Clipboard.Trigger class="group">
        {#snippet asChild(attrs)}
          <IconButton {...attrs}>
            <Clipboard.Indicator
              class="size-5 group-data-copied:text-green-600 dark:group-data-copied:text-green-500"
            >
              {#snippet asChild(attrs, ctx)}
                {#if ctx.copied}
                  <CheckIcon {...attrs} />
                {:else}
                  <Copy01Icon {...attrs} />
                {/if}
              {/snippet}
            </Clipboard.Indicator>
          </IconButton>
        {/snippet}
      </Clipboard.Trigger>
    </Clipboard.Control>
  </Clipboard.Root>
</Container>
