<script lang="ts">
  import {Clipboard} from '$lib/index.js';

  let {value}: {value: string} = $props();
</script>

<Clipboard.Root {value}>
  <Clipboard.Label>Label</Clipboard.Label>

  <Clipboard.Control>
    <Clipboard.Input />

    <Clipboard.Trigger>
      <Clipboard.Indicator>
        {#snippet children(ctx)}
          {#if ctx.copied}
            Copied
          {:else}
            Copy
          {/if}
        {/snippet}
      </Clipboard.Indicator>
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>
