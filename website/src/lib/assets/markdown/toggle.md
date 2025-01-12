---
title: Toggle
description: A component for switching between two states, suchjson as on/off.
---

# Toggle

A component for switching between two states, suchjson as on/off.

## Usage

```svelte
<script>
  import {Toggle} from 'ui-ingredients';
  import {BellIcon, BellOffIcon} from '$lib/icons';

  let pressed = $state(false);
</script>

<Toggle.Root
  {pressed}
  onPressedChange={(detail) => {
    pressed = detail.pressed;
  }}
>
  {#if pressed}
    <BellOffIcon />
  {:else}
    <BellIcon />
  {/if}
</Toggle.Root>
```
