# Timer

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
</Timer.Root>
```
