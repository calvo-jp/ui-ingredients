---
id: progress-circular
title: Progress - Circular
description: A component for displaying the completion status of a task or process.
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {Progress} from 'ui-ingredients';
</script>

<Progress.Root min={0} max={100} value={50}>
  <Progress.Label>Label</Progress.Label>
  <Progress.Circle>
    <Progress.CircleTrack />
    <Progress.CircleRange />
  </Progress.Circle>
</Progress.Root>
```

## API Reference

<api>
