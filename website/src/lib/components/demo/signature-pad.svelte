<script lang="ts">
  import Label from '$lib/components/ui/label.svelte';
  import {RefreshCcw01Icon} from '@untitled-theme/icons-svelte';
  import {SignaturePad} from 'ui-ingredients';
</script>

<SignaturePad.Root>
  {#snippet children(context)}
    <SignaturePad.Label class="text-muted mb-1 inline-block font-medium">
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
      {/snippet}
    </SignaturePad.Label>

    <SignaturePad.Control
      class="aspect-[16/6] w-full rounded border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800/50"
    >
      <SignaturePad.Segment>
        {#each context.paths as path}
          <SignaturePad.SegmentPath
            {path}
            class="fill-neutral-700 stroke-neutral-700 dark:fill-neutral-200 dark:stroke-neutral-200"
          />
        {/each}

        <SignaturePad.CurrentSegmentPath
          class="fill-neutral-700 stroke-neutral-700 dark:fill-neutral-200 dark:stroke-neutral-200"
        />
      </SignaturePad.Segment>
      <SignaturePad.Guide
        class="absolute bottom-8 left-8 right-8 border-t border-dashed border-neutral-400 dark:border-neutral-600"
      />
      <SignaturePad.ClearTrigger
        class="absolute right-3 top-3 flex size-6 items-center justify-center rounded hover:bg-black/5 dark:hover:bg-white/5"
      >
        <RefreshCcw01Icon class="size-4" />
      </SignaturePad.ClearTrigger>
    </SignaturePad.Control>
  {/snippet}
</SignaturePad.Root>
