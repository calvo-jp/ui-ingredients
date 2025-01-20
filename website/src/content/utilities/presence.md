---
id: presence
title: Presence
description: A component that controls content rendering and unmounting based on state.
---

## Usage

```svelte
<script>
  import {Presence} from 'ui-ingredients';

  let present = $state(false);
</script>

<button
  onclick={() => {
    present = !present;
  }}
>
  Toggle
</button>

<Presence {present} lazyMount keepMounted>Content</Presence>
```

## API Reference

<api>
