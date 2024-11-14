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

<Progress.Root min={0} max={100} {value}>
  <Progress.Circle
    class="[--size:theme(spacing.24)] [--thickness:theme(spacing.3)]"
  >
    <Progress.CircleTrack class="stroke-neutral-600" />
    <Progress.CircleRange class="stroke-accent transition-all duration-200" />
  </Progress.Circle>
</Progress.Root>
