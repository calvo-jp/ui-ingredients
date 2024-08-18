<script lang="ts">
  import {Progress} from '$lib/index.js';

  let n = $state(0);

  $effect(() => {
    let interval = setInterval(() => {
      n += 5;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div>
  <Progress.Root min={0} max={100} value={n}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle class="[--size:280px] [--thickness:8px]">
      <Progress.CircleTrack class="stroke-gray-300" />
      <Progress.CircleRange class="stroke-gray-500" />
    </Progress.Circle>
  </Progress.Root>

  <Progress.Root min={0} max={100} value={n}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Track class="h-4 rounded-full bg-gray-200 overflow-hidden">
      <Progress.Range class="bg-sky-400 h-full transition-all duration-200 [--translate-x:100%]" />
    </Progress.Track>
  </Progress.Root>
</div>
