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
</script>

<Progress.Root min={0} max={100} {value}>
  {#snippet children(context)}
    <Progress.Label>Label</Progress.Label>

    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>

    <div>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
      <Progress.ValueText />
    </div>

    <div>
      <button
        onclick={() => {
          context.setValue((context.value ?? 0) - 10);
        }}
      >
        Decrease
      </button>
      <button
        onclick={() => {
          context.setValue((context.value ?? 0) + 10);
        }}
      >
        Increase
      </button>
    </div>
  {/snippet}
</Progress.Root>
