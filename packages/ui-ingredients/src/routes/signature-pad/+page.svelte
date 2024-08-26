<script lang="ts">
  import {SignaturePad} from '$lib/index.js';
</script>

<SignaturePad.Root>
  {#snippet children(context)}
    <SignaturePad.Label class="mb-1 inline-block text-neutral-400">Signature</SignaturePad.Label>
    <SignaturePad.Control class="h-[16rem] max-w-[32rem] bg-neutral-800">
      <SignaturePad.Segment>
        {#each context.paths as path}
          <SignaturePad.SegmentPath {path} class="fill-neutral-200 stroke-neutral-200" />
        {/each}

        <SignaturePad.CurrentSegmentPath class="fill-neutral-200 stroke-neutral-200" />
      </SignaturePad.Segment>
      <SignaturePad.Guide />
    </SignaturePad.Control>
    <SignaturePad.ClearTrigger class="mt-3 h-11 max-w-[32rem] border px-3"
      >Clear</SignaturePad.ClearTrigger
    >
  {/snippet}
</SignaturePad.Root>
