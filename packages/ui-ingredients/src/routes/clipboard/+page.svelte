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
</script>

<Clipboard.Root value={randomString()}>
  <Clipboard.Label>Token</Clipboard.Label>
  <Clipboard.Control>
    <Clipboard.Input />
    <Clipboard.Trigger>
      <Clipboard.Indicator>
        {#snippet children(ctx)}
          {#if ctx.copied}
            <!-- check -->
          {:else}
            <!-- copy -->
          {/if}
        {/snippet}
      </Clipboard.Indicator>
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>
