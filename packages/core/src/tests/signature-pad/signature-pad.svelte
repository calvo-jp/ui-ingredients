<script lang="ts">
  import {SignaturePad} from '$lib/index.js';
</script>

<SignaturePad.Root>
  {#snippet children(context)}
    <SignaturePad.Label>Label</SignaturePad.Label>

    <SignaturePad.Control>
      <SignaturePad.Segment>
        {#each context.paths as path}
          <SignaturePad.SegmentPath {path} />
        {:else}
          <SignaturePad.SegmentPath path="" />
        {/each}

        <SignaturePad.CurrentSegmentPath />
      </SignaturePad.Segment>
      <SignaturePad.Guide />
    </SignaturePad.Control>
    <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
  {/snippet}
</SignaturePad.Root>
