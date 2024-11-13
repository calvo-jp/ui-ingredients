---
name: Progress
description: A component for displaying the completion status of a task or process.
---

## Usage

```svelte
<script lang="ts">
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