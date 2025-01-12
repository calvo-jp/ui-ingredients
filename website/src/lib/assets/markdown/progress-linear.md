---
title: Progress - Linear
description: A component for displaying the completion status of a task or process.
---

<script>
  import {ProgressLinearDemo} from '$lib/demo';
  import {Anatomy} from '$lib/anatomy';
  import {Api} from '$lib/api';
  import Metadata from '$lib/metadata.svelte';
  import PageHeading from '$lib/page-heading.svelte';
</script>

<svelte:head>

  <title>UI Ingredients | {title}</title>
</svelte:head>

<Metadata title="{title}" description="{description}" />
<PageHeading title="{title}" description="{description}" />

<ProgressLinearDemo />

## Anatomy

<Anatomy id="progress-linear" />

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

<Api id="progress" />