---
title: Progress - Linear
description: A component for displaying the completion status of a task or process.
---

# Progress - Linear

A component for displaying the completion status of a task or process.

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
