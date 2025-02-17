<script lang="ts">
  import {Timer} from '$lib/index.js';
</script>

<Timer.Root
  startMs={1000 * 60 * 60}
  targetMs={1000 * 60 * 60 * 5}
  autoStart
  countdown
  class="lg:max-w-[32rem]"
>
  <Timer.Area>
    <Timer.Item type="hours">
      <Timer.ItemValue />
      <Timer.ItemLabel>Hours</Timer.ItemLabel>
    </Timer.Item>
    <Timer.Separator class="text-xl font-bold">:</Timer.Separator>
    <Timer.Item type="minutes">
      <Timer.ItemValue />
      <Timer.ItemLabel>Minutes</Timer.ItemLabel>
    </Timer.Item>
    <Timer.Separator class="text-xl font-bold">:</Timer.Separator>
    <Timer.Item type="seconds">
      <Timer.ItemValue />
      <Timer.ItemLabel>Seconds</Timer.ItemLabel>
    </Timer.Item>
  </Timer.Area>
  <Timer.Control class="mt-4 flex gap-2">
    <Timer.ActionTrigger action="start">Start</Timer.ActionTrigger>
    <Timer.ActionTrigger action="resume">Resume</Timer.ActionTrigger>
    <Timer.ActionTrigger action="pause">Pause</Timer.ActionTrigger>
    <Timer.ActionTrigger action="reset">Reset</Timer.ActionTrigger>
  </Timer.Control>
</Timer.Root>
