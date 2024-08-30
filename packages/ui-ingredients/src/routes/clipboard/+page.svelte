<script lang="ts" module>
  function randomString(length = 16) {
    const result: string[] = [];

    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz' +
      '0123456789';

    const charsCount = chars.length;

    for (let i = 0; i < length; i += 1) {
      const random = chars.charAt(Math.floor(Math.random() * charsCount));

      result.push(random);
    }

    return result.join('');
  }
</script>

<script lang="ts">
  import {Clipboard} from '$lib/index.js';
  import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';
  import {IconButton, Input, Label} from '../shared/index.js';
</script>

<Clipboard.Root value={randomString()}>
  <Clipboard.Label>
    {#snippet asChild(mergedProps)}
      <Label {...mergedProps}>Token</Label>
    {/snippet}
  </Clipboard.Label>

  <Clipboard.Control class="flex w-full gap-2 lg:max-w-[24rem]">
    <Clipboard.Input>
      {#snippet asChild(mergedProps)}
        <Input {...mergedProps} />
      {/snippet}
    </Clipboard.Input>

    <Clipboard.Trigger>
      {#snippet asChild(mergedProps)}
        <IconButton {...mergedProps}>
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
