<script lang="ts">
  import {Label} from '$lib/ui';
  import {SignaturePad} from 'ui-ingredients';
</script>

<SignaturePad.Root>
  {#snippet children(context)}
    <SignaturePad.Label class="text-muted mb-1 inline-block font-medium">
      {#snippet asChild(attrs)}
        <Label {...attrs}>Signature</Label>
      {/snippet}
    </SignaturePad.Label>

    <SignaturePad.Control
      class="bg-light aspect-video w-full rounded lg:max-w-[32rem]"
    >
      <SignaturePad.Segment>
        {#each context.paths as path}
          <SignaturePad.SegmentPath
            {path}
            class="fill-neutral-200 stroke-neutral-200"
          />
        {/each}

        <SignaturePad.CurrentSegmentPath
          class="fill-neutral-200 stroke-neutral-200"
        />
      </SignaturePad.Segment>
      <SignaturePad.Guide />
    </SignaturePad.Control>
    <SignaturePad.ClearTrigger class="mt-3 h-12 rounded border px-5"
      >Clear</SignaturePad.ClearTrigger
    >
  {/snippet}
</SignaturePad.Root>
