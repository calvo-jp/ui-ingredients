<script lang="ts">
  import {IconButton, Input, Label} from '$lib/ui';
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

    <Clipboard.Trigger>
      {#snippet asChild(attrs)}
        <IconButton {...attrs}>
          <Clipboard.Indicator copied>
            <CheckIcon class="size-5 text-green-500" />
          </Clipboard.Indicator>
          <Clipboard.Indicator>
            <Copy01Icon class="size-5" />
          </Clipboard.Indicator>
        </IconButton>
      {/snippet}
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>
