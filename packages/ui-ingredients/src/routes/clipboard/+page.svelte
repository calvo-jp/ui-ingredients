<script lang="ts">
  import {Clipboard} from '$lib/index.js';
  import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';
  import {IconButton, Input, Label} from '../shared/index.js';

  function randomString(length = 16) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
</script>

<Clipboard.Root value={randomString()}>
  <Clipboard.Label>
    {#snippet asChild(attrs)}
      <Label {...attrs}>Token</Label>
    {/snippet}
  </Clipboard.Label>

  <Clipboard.Control class="flex w-full gap-2 lg:max-w-[24rem]">
    <Clipboard.Input>
      {#snippet asChild(attrs)}
        <Input {...attrs} />
      {/snippet}
    </Clipboard.Input>

    <Clipboard.Trigger>
      {#snippet asChild(attrs)}
        <IconButton {...attrs}>
          <Clipboard.Indicator copied>
            <CheckIcon class="text-success" />
          </Clipboard.Indicator>
          <Clipboard.Indicator>
            <Copy01Icon />
          </Clipboard.Indicator>
        </IconButton>
      {/snippet}
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>
