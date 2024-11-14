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

<Progress.Root min={0} max={100} {value} class="flex items-center gap-2">
  <Progress.Track class="h-3 grow overflow-hidden rounded-full bg-neutral-600">
    <Progress.Range
      class="bg-accent h-full transition-all duration-200 [--translate-x:100%]"
    />
  </Progress.Track>
  <Progress.ValueText
    class="text-muted block w-10 shrink-0 text-right font-semibold"
  />
</Progress.Root>
