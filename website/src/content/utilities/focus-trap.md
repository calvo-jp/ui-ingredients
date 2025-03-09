---
id: focus-trap
title: Focus Trap
description: A component for trapping focus within a specified element.
---

<demo>

## Usage

```svelte
<script lang="ts">
  import {FocusTrap} from '$lib/index.js';

  let trapped = $state(false);

  $inspect(trapped);
</script>

<button
  type="button"
  onclick={() => {
    trapped = !trapped;
  }}
>
  {#if trapped}
    End trap
  {:else}
    Start trap
  {/if}
</button>

<FocusTrap disabled={!trapped} returnFocusOnDeactivate={false}>
  <input />
  <textarea></textarea>
  <button
    type="button"
    onclick={() => {
      trapped = false;
    }}
  >
    Submit
  </button>
</FocusTrap>
```

## API Reference

<api>
