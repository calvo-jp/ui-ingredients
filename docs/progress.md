# Progress

## Usage

### Linear Progress

```svelte
<script>
  import {Progress} from 'ui-ingredients';
</script>

<Progress.Root min={0} max={100} value={0}>
  <Progress.Label>Label</Progress.Label>

  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
  <Progress.ValueText />
</Progress.Root>
```

### Circular Progress

```svelte
<script>
  import {Progress} from 'ui-ingredients';
</script>

<Progress.Root min={0} max={100} value={0}>
  <Progress.Label>Label</Progress.Label>

  <Progress.Circle>
    <Progress.CircleTrack />
    <Progress.CircleRange />
  </Progress.Circle>
</Progress.Root>
```
