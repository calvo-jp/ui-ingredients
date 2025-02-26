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

  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
  <Progress.ValueText />
</Progress.Root>
