<script lang="ts">
  import IconButton from '$lib/components/ui/icon-button.svelte';
  import Input from '$lib/components/ui/input.svelte';
  import Label from '$lib/components/ui/label.svelte';
  import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';
  import {Clipboard} from 'ui-ingredients';
</script>

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

    <Clipboard.Trigger
      class="ui-copied:text-green-600 dark:ui-copied:text-green-500"
    >
      {#snippet asChild(attrs)}
        <IconButton {...attrs}>
          <Clipboard.Indicator class="size-5">
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
