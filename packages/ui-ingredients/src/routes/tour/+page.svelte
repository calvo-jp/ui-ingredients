<script lang="ts">
  import {Tour, type TourStepDetails} from '$lib/index.js';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {Button} from '../shared/index.js';

  const length = 5;
  const steps = Array.from({length}).map((_, idx) => {
    const n = idx + 1;

    const actions: TourStepDetails['actions'] = [];

    if (n > 1) {
      actions.push({
        label: 'Prev',
        action: 'prev',
      });
    }

    if (n < 5) {
      actions.push({
        label: 'Next',
        action: 'next',
      });
    }

    if (n === length) {
      actions.push({
        label: 'Done',
        action: 'dismiss',
      });
    }

    const o: TourStepDetails = {
      type: 'tooltip',
      arrow: true,
      title: `Step ${n} Title`,
      description: `Step ${n} Description`,
      actions,
      target() {
        return document.getElementById(`step-${n}-target`);
      },
    };

    return o;
  });
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
  {#each Array.from({length}) as _, idx}
    {@const n = idx + 1}

    <div
      id="step-{n}-target"
      class="data-[tour-highlighted]:border-accent rounded border p-5"
    >
      Target {n}
    </div>
  {/each}
</div>
