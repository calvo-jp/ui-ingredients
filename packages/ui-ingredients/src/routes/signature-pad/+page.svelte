<script lang="ts">
  import {SignaturePad} from '$lib/index.js';
  import RefreshIcon from '../refresh-icon.svelte';
</script>

<SignaturePad.Root>
  {#snippet children(context)}
    <SignaturePad.Label>Signature</SignaturePad.Label>

    <SignaturePad.Control>
      <SignaturePad.Segment>
        {#each context.paths as path}
          <SignaturePad.SegmentPath {path} />
        {/each}

        <SignaturePad.CurrentSegmentPath />
      </SignaturePad.Segment>
      <SignaturePad.Guide />

      <SignaturePad.ClearTrigger>
        <RefreshIcon style="width:16px;height:16px;" />
      </SignaturePad.ClearTrigger>
    </SignaturePad.Control>
  {/snippet}
</SignaturePad.Root>

<style>
  :global([data-scope='signature-pad'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='signature-pad'][data-part='root']) {
    max-width: 375px;
  }

  :global([data-scope='signature-pad'][data-part='control']) {
    aspect-ratio: 16/9;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='signature-pad'][data-part='clear-trigger']) {
    border: 1px solid var(--border-default);
    height: 28px;
    width: 28px;
    position: absolute;
    top: 6px;
    right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
