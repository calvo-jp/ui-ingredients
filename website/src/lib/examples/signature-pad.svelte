<script lang="ts">
  import {Label} from '$lib/ui';
  import {RefreshCcw01Icon} from '@untitled-theme/icons-svelte';
  import {SignaturePad} from 'ui-ingredients';
</script>

<SignaturePad.Root class="mx-auto max-w-[32rem]">
  {#snippet children(context)}
    <SignaturePad.Label class="text-muted mb-1 inline-block font-medium">
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
      {/snippet}
    </SignaturePad.Label>

    <SignaturePad.Control class="aspect-video w-full rounded bg-neutral-800/50">
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
      <SignaturePad.Guide
        class="absolute bottom-8 left-8 right-8 border-t border-dashed border-neutral-600"
      />
      <SignaturePad.ClearTrigger
        class="absolute right-3 top-3 flex size-6 items-center justify-center rounded hover:bg-neutral-700/50"
      >
        <RefreshCcw01Icon class="size-4" />
      </SignaturePad.ClearTrigger>
    </SignaturePad.Control>
  {/snippet}
</SignaturePad.Root>
