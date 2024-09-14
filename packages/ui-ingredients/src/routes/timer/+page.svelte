<script lang="ts">
  import {Timer} from '$lib/index.js';
  import {Button} from '../shared/index.js';
</script>

<Timer.Root
  startMs={1000 * 60 * 60}
  targetMs={1000 * 60 * 60 * 5}
  autoStart
  countdown
  class="lg:max-w-[32rem]"
>
  <Timer.Area class="flex items-center gap-2 font-mono">
    <Timer.Item type="hours" class="flex flex-col items-center">
      <Timer.ItemValue class="text-4xl font-bold" />
      <Timer.ItemLabel class="text-muted text-xs">Hours</Timer.ItemLabel>
    </Timer.Item>
    <Timer.Separator class="text-xl font-bold">:</Timer.Separator>
    <Timer.Item type="minutes" class="flex flex-col items-center">
      <Timer.ItemValue class="text-4xl font-bold" />
      <Timer.ItemLabel class="text-muted text-xs">Minutes</Timer.ItemLabel>
    </Timer.Item>
    <Timer.Separator class="text-xl font-bold">:</Timer.Separator>
    <Timer.Item type="seconds" class="flex flex-col items-center">
      <Timer.ItemValue class="text-4xl font-bold" />
      <Timer.ItemLabel class="text-muted text-xs">Seconds</Timer.ItemLabel>
    </Timer.Item>
  </Timer.Area>
  <Timer.Control class="mt-4 flex gap-2">
    <Timer.ActionTrigger action="start">
      {#snippet asChild(attrs)}
        <Button class="w-24" {...attrs}>Start</Button>
      {/snippet}
    </Timer.ActionTrigger>
    <Timer.ActionTrigger action="resume">
      {#snippet asChild(attrs)}
        <Button class="w-24" {...attrs}>Resume</Button>
      {/snippet}
    </Timer.ActionTrigger>
    <Timer.ActionTrigger action="pause">
      {#snippet asChild(attrs)}
        <Button class="w-24" {...attrs}>Pause</Button>
      {/snippet}
    </Timer.ActionTrigger>
    <Timer.ActionTrigger action="reset">
      {#snippet asChild(attrs)}
        <Button class="w-24" {...attrs}>Reset</Button>
      {/snippet}
    </Timer.ActionTrigger>
  </Timer.Control>
</Timer.Root>
