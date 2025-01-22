<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import {Timer} from 'ui-ingredients';
</script>

<Timer.Root
  startMs={1000 * 60 * 60}
  targetMs={1000 * 60 * 60 * 5}
  autoStart
  countdown
  class="mx-auto w-fit"
>
  <Timer.Area class="flex items-center gap-2 font-mono">
    <Timer.Item type="hours" class="flex flex-col items-center">
      <Timer.ItemValue class="text-4xl font-bold" />
      <Timer.ItemLabel class="text-xs text-neutral-600 dark:text-neutral-400">
        Hours
      </Timer.ItemLabel>
    </Timer.Item>
    <Timer.Separator class="text-xl font-bold">:</Timer.Separator>
    <Timer.Item type="minutes" class="flex flex-col items-center">
      <Timer.ItemValue class="text-4xl font-bold" />
      <Timer.ItemLabel class="text-xs text-neutral-600 dark:text-neutral-400">
        Minutes
      </Timer.ItemLabel>
    </Timer.Item>
    <Timer.Separator class="text-xl font-bold">:</Timer.Separator>
    <Timer.Item type="seconds" class="flex flex-col items-center">
      <Timer.ItemValue class="text-4xl font-bold" />
      <Timer.ItemLabel class="text-xs text-neutral-600 dark:text-neutral-400">
        Seconds
      </Timer.ItemLabel>
    </Timer.Item>
  </Timer.Area>
  <Timer.Control class="mt-4 flex gap-2">
    <Timer.ActionTrigger action="start">
      {#snippet asChild(attrs)}
        <Button class="w-24" variant="outline" size="sm" {...attrs}>
          Start
        </Button>
      {/snippet}
    </Timer.ActionTrigger>
    <Timer.ActionTrigger action="resume">
      {#snippet asChild(attrs)}
        <Button class="w-24" variant="outline" size="sm" {...attrs}>
          Resume
        </Button>
      {/snippet}
    </Timer.ActionTrigger>
    <Timer.ActionTrigger action="pause">
      {#snippet asChild(attrs)}
        <Button class="w-24" variant="outline" size="sm" {...attrs}>
          Pause
        </Button>
      {/snippet}
    </Timer.ActionTrigger>
    <Timer.ActionTrigger action="reset">
      {#snippet asChild(attrs)}
        <Button class="w-24" variant="outline" size="sm" {...attrs}>
          Reset
        </Button>
      {/snippet}
    </Timer.ActionTrigger>
  </Timer.Control>
</Timer.Root>
