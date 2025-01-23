---
id: progress-linear
title: Progress - Linear
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
  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
  <Progress.ValueText />
</Progress.Root>
```

## API Reference

<api>