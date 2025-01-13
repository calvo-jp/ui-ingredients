<script lang="ts">
  import {Progress} from 'ui-ingredients';

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

<Progress.Root min={0} max={100} {value} class="relative mx-auto w-fit">
  <Progress.Circle
    class="[--size:theme(spacing.28)] [--thickness:theme(spacing[2.5])]"
  >
    <Progress.CircleTrack class="stroke-neutral-300 dark:stroke-neutral-800" />
    <Progress.CircleRange
      class="stroke-indigo-600 transition-all duration-150 dark:stroke-indigo-500"
    />
  </Progress.Circle>
  <Progress.ValueText
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold"
  />
</Progress.Root>
