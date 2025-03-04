<script lang="ts">
  import {Tour, type TourStepDetails} from '$lib/index.js';
  import XIcon from '../x-icon.svelte';

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

        <Tour.CloseTrigger>
          <XIcon style="width:20px;height:20px;" />
        </Tour.CloseTrigger>

        <Tour.ProgressText />
        <Tour.Title />
        <Tour.Description />

        <div style="display:flex;gap:8px;margin-top:12px;">
          {#each actions as action}
            <Tour.ActionTrigger {action}>
              {action.label}
            </Tour.ActionTrigger>
          {/each}
        </div>
      </Tour.Content>
    </Tour.Positioner>
  {/snippet}
</Tour.Root>

<div style="display:flex;flex-direction:column;gap:12px;margin-top:24px;">
  {#each Array.from({length}) as _, idx}
    {@const n = idx + 1}

    <div id="step-{n}-target" style="width:fit-content;">
      Target {n}
    </div>
  {/each}
</div>

<style>
  :global([data-scope='tour'][data-part='trigger']) {
    height: 40px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='tour'][data-part='backdrop']) {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    backdrop-filter: blur(4px);
  }

  :global([data-scope='tour'][data-part='backdrop'][data-state='open']) {
    animation: fade-in 250ms;
  }

  :global([data-scope='tour'][data-part='backdrop'][data-state='closed']) {
    animation: fade-out 150ms;
  }

  :global([data-scope='tour'][data-part='progress-text']) {
    font-size: 14px;
    color: oklch(0.552 0.016 285.938);
  }

  :global([data-scope='tour'][data-part='title']) {
    font-size: 18px;
    margin-top: 8px;
  }

  :global([data-scope='tour'][data-part='description']) {
    color: var(--color-muted);
  }

  :global([data-scope='tour'][data-part='close-trigger']) {
    position: absolute;
    top: 14px;
    right: 14px;
  }

  :global([data-scope='tour'][data-part='action-trigger']) {
    width: 100%;
    height: 36px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='tour'][data-part='content']) {
    position: relative;
    background: white;
    padding: 16px;
    min-width: 325px;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
