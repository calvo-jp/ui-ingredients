<script lang="ts">
  import {SignaturePad} from '$lib/index.js';
</script>

<SignaturePad.Root>
  {#snippet children(context)}
    <SignaturePad.Label class="text-muted mb-1 inline-block font-medium"
      >Signature</SignaturePad.Label
    >
    <SignaturePad.Control class="bg-light h-[16rem] w-full rounded lg:max-w-[32rem]">
      <SignaturePad.Segment>
        {#each context.paths as path}
          <SignaturePad.SegmentPath {path} class="fill-neutral-200 stroke-neutral-200" />
        {/each}

        <SignaturePad.CurrentSegmentPath class="fill-neutral-200 stroke-neutral-200" />
      </SignaturePad.Segment>
      <SignaturePad.Guide />
    </SignaturePad.Control>
    <SignaturePad.ClearTrigger class="mt-3 h-12 rounded border px-5"
      >Clear</SignaturePad.ClearTrigger
    >
  {/snippet}
</SignaturePad.Root>
