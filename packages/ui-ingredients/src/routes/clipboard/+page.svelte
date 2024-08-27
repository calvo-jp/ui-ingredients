<script lang="ts">
  import {Clipboard} from '$lib/index.js';
  import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-svelte';

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
  <Clipboard.Label class="text-muted mb-1 inline-block font-medium">Token</Clipboard.Label>
  <Clipboard.Control class="flex w-full gap-2 lg:max-w-[24rem]">
    <Clipboard.Input class="h-12 grow rounded border px-3.5" />
    <Clipboard.Trigger class="flex size-12 items-center justify-center rounded border">
      <Clipboard.Indicator copied>
        <CheckIcon class="text-success size-5" />
      </Clipboard.Indicator>
      <Clipboard.Indicator>
        <Copy01Icon class="size-5" />
      </Clipboard.Indicator>
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>
