<script lang="ts">
  import {Tour, type TourStepDetails} from '$lib/index.js';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {Button} from '../shared/index.js';

  const steps: TourStepDetails[] = [
    {
      type: 'tooltip',
      arrow: true,
      title: 'Step 1 Title',
      description: 'Step 1 Description',
      target() {
        return document.getElementById('step-1-target');
      },
      actions: [
        {
          label: 'Next',
          action: 'next',
        },
      ],
    },
    {
      type: 'tooltip',
      arrow: true,
      title: 'Step 2 Title',
      description: 'Step 2 Description',
      target() {
        return document.getElementById('step-2-target');
      },
      actions: [
        {
          label: 'Prev',
          action: 'prev',
        },
        {
          label: 'Next',
          action: 'next',
        },
      ],
    },
    {
      type: 'tooltip',
      arrow: true,
      title: 'Step 3 Title',
      description: 'Step 3 Description',
      target() {
        return document.getElementById('step-3-target');
      },
      actions: [
        {
          label: 'Prev',
          action: 'prev',
        },
        {
          label: 'Next',
          action: 'next',
        },
      ],
    },
    {
      type: 'tooltip',
      arrow: true,
      title: 'Step 4 Title',
      description: 'Step 4 Description',
      target() {
        return document.getElementById('step-4-target');
      },
      actions: [
        {
          label: 'Prev',
          action: 'prev',
        },
        {
          label: 'Done',
          action: 'dismiss',
        },
      ],
    },
  ];
</script>

<Tour.Root {steps} closeOnEscape={false} closeOnInteractOutside={false}>
  {#snippet children(tour)}
    {@const actions = tour.step?.actions ?? []}

    <Tour.Trigger>
      {#snippet asChild(attrs)}
        <Button {...attrs}>Start</Button>
      {/snippet}
    </Tour.Trigger>
    <Tour.Backdrop class="bg-black/50 backdrop-blur-sm" />
    <Tour.Spotlight />
    <Tour.Positioner>
      <Tour.Content
        class="relative w-[24rem] rounded border bg-neutral-900 p-5"
      >
        <Tour.Arrow
          class="[--arrow-background:theme(colors.neutral[900])] [--arrow-size:theme(spacing.4)]"
        >
          <Tour.ArrowTip />
        </Tour.Arrow>

        <Tour.ProgressText class="text-muted text-sm" />
        <Tour.Title class="mt-4 text-lg font-medium" />
        <Tour.Description class="text-muted" />

        <div class="mt-5 flex justify-end gap-3">
          {#each actions as action}
            <Tour.ActionTrigger {action}>
              {#snippet asChild(attrs)}
                <Button variant="outline" class="w-24 shrink" {...attrs}>
                  {action.label}
                </Button>
              {/snippet}
            </Tour.ActionTrigger>
          {/each}
        </div>

        <Tour.CloseTrigger class="absolute right-4 top-4">
          <XCloseIcon />
        </Tour.CloseTrigger>
      </Tour.Content>
    </Tour.Positioner>
  {/snippet}
</Tour.Root>

<div class="text-muted mt-10 grid gap-4 lg:grid-cols-2">
  {#each Array.from({length: 4}) as _, idx}
    {@const n = idx + 1}

    <div
      id="step-{n}-target"
      class="data-[tour-highlighted]:border-accent rounded border p-5"
    >
      Target {n}
    </div>
  {/each}
</div>
