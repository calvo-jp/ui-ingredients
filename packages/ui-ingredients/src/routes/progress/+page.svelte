<script lang="ts">
  import {Progress} from '$lib/index.js';

  let value = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      value += 10;

      if (value >= 100) {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  });

  $inspect({value});
</script>

<Progress.Root
  min={0}
  max={100}
  {value}
  onValueChange={(detail) => {
    value = detail.value ?? 0;
  }}
>
  <Progress.Label>Label</Progress.Label>

  <Progress.Circle>
    <Progress.CircleTrack />
    <Progress.CircleRange />
  </Progress.Circle>

  <div style="display:flex;align-items:center;gap:8px;margin-top:12px;">
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>

    <Progress.ValueText />
  </div>
</Progress.Root>

<style>
  :global([data-scope='progress'][data-part='root']) {
    max-width: 250px;
  }

  :global([data-scope='progress'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='progress'][data-part='circle']) {
    --thickness: 12px;
    --size: 100px;
  }

  :global([data-scope='progress'][data-part='circle-track']) {
    stroke: oklch(0.922 0 0);
  }

  :global([data-scope='progress'][data-part='circle-range']) {
    stroke: oklch(0.746 0.16 232.661);
    transition: all 250ms;
  }

  :global([data-scope='progress'][data-part='track']) {
    flex-grow: 1;
    height: 16px;
    background: oklch(0.922 0 0);
    border-radius: 9999px;
  }

  :global([data-scope='progress'][data-part='range']) {
    height: 100%;
    background: oklch(0.746 0.16 232.661);
    transition: all 250ms;
    border-radius: 9999px;
  }
</style>
