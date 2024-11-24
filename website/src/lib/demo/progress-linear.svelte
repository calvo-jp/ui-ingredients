<script lang="ts">
  import {Progress} from 'ui-ingredients';
  import Container from './container.svelte';

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

<Container>
  <Progress.Root
    min={0}
    max={100}
    {value}
    class="mx-auto flex max-w-[20rem] items-center gap-2"
  >
    <Progress.Track
      class="h-2.5 grow overflow-hidden rounded-full bg-neutral-300 dark:bg-neutral-800"
    >
      <Progress.Range
        class="h-full rounded-full bg-indigo-600 transition-all duration-150 [--translate-x:100%] dark:bg-indigo-500"
      />
    </Progress.Track>
    <Progress.ValueText class="block w-10 shrink-0 text-right font-semibold" />
  </Progress.Root>
</Container>
