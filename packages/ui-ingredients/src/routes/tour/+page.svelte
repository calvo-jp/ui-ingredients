<script lang="ts">
  import {Tour, type TourStepDetails} from '$lib/index.js';

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

<Tour.Root {steps}>
  {#snippet children(tour)}
    {@const actions = tour.step?.actions ?? []}

    <Tour.Trigger>Start</Tour.Trigger>
    <Tour.Backdrop />
    <Tour.Spotlight />
    <Tour.Positioner>
      <Tour.Content>
        <Tour.Arrow>
          <Tour.ArrowTip />
        </Tour.Arrow>
        <Tour.ProgressText />
        <Tour.Title />
        <Tour.Description />

        {#each actions as action}
          <Tour.ActionTrigger {action}>
            {action.label}
          </Tour.ActionTrigger>
        {/each}

        <Tour.CloseTrigger>Close</Tour.CloseTrigger>
      </Tour.Content>
    </Tour.Positioner>
  {/snippet}
</Tour.Root>

<div>
  {#each Array.from({length}) as _, idx}
    {@const n = idx + 1}

    <div id="step-{n}-target">
      Target {n}
    </div>
  {/each}
</div>
