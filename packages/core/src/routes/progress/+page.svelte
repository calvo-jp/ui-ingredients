<script lang="ts">
  import {Progress} from '$lib/index.js';
  import {Button, Label} from '../shared/index.js';

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

<Progress.Root min={0} max={100} {value} class="w-full lg:max-w-[24rem]">
  {#snippet children(context)}
    <Progress.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
      {/snippet}
    </Progress.Label>

    <Progress.Circle
      class="mt-4 [--size:theme(spacing.24)] [--thickness:theme(spacing.3)]"
    >
      <Progress.CircleTrack class="stroke-neutral-600" />
      <Progress.CircleRange class="stroke-accent transition-all duration-200" />
    </Progress.Circle>

    <div class="mt-5 flex items-center gap-2">
      <Progress.Track
        class="h-3 grow overflow-hidden rounded-full bg-neutral-600"
      >
        <Progress.Range
          class="bg-accent h-full transition-all duration-200 [--translate-x:100%]"
        />
      </Progress.Track>
      <Progress.ValueText
        class="text-muted block w-10 shrink-0 text-right font-semibold"
      />
    </div>

    <div class="mt-5 flex gap-4">
      <Button
        onclick={() => {
          context.setValue((context.value ?? 0) - 10);
        }}
      >
        Decrease
      </Button>
      <Button
        onclick={() => {
          context.setValue((context.value ?? 0) + 10);
        }}
      >
        Increase
      </Button>
    </div>
  {/snippet}
</Progress.Root>
