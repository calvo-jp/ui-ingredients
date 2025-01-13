---
title: Tour
description: A component for guiding users through a series of steps or features in an application or website.
---

## Usage

```svelte
<script>
  import {Tour, type TourStepDetails} from 'ui-ingredients';
  import {XCloseIcon} from '$lib/icons';

  let steps: TourStepDetails[] = [
    {
      type: 'tooltip',
      arrow: true,
      title: 'Step 1 Title',
      description: 'Step 1 Description',
      actions,
      target() {
        return document.getElementById('target-1');
      },
    },
    {
      type: 'tooltip',
      arrow: true,
      title: 'Step 2 Title',
      description: 'Step 2 Description',
      actions,
      target() {
        return document.getElementById('target-2');
      },
    },
    {
      type: 'tooltip',
      arrow: true,
      title: 'Step 3 Title',
      description: 'Step 3 Description',
      actions,
      target() {
        return document.getElementById('target-3');
      },
    },
  ];
</script>

<Tour.Root {steps}>
  {#snippet children(ctx)}
    {@const actions = ctx.step?.actions ?? []}

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
          <Tour.ActionTrigger {action} />
        {/each}

        <Tour.CloseTrigger>
          <XCloseIcon />
        </Tour.CloseTrigger>
      </Tour.Content>
    </Tour.Positioner>
  {/snippet}
</Tour.Root>

<div id="target-1">Target 1</div>
<div id="target-2">Target 2</div>
<div id="target-3">Target 3</div>
```
