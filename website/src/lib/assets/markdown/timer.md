---
title: Timer
description: A component for counting down or tracking elapsed time.
---

# Timer

A component for counting down or tracking elapsed time.

## Usage

```svelte
<script>
  import {Timer} from 'ui-ingredients';
</script>

<Timer.Root
  startMs={1000 * 60 * 60}
  targetMs={1000 * 60 * 60 * 5}
  autoStart
  countdown
>
  <Timer.Area>
    <Timer.Item type="hours">
      <Timer.ItemValue />
    </Timer.Item>
    <Timer.Separator>:</Timer.Separator>
    <Timer.Item type="minutes">
      <Timer.ItemValue />
    </Timer.Item>
    <Timer.Separator>:</Timer.Separator>
    <Timer.Item type="seconds">
      <Timer.ItemValue />
    </Timer.Item>
  </Timer.Area>
  <Timer.Control>
    <Timer.ActionTrigger action="start">Play</Timer.ActionTrigger>
    <Timer.ActionTrigger action="pause">Pause</Timer.ActionTrigger>
  </Timer.Control>
</Timer.Root>
```
