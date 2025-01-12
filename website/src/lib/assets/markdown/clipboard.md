---
title: Clipboard
description: A component for copying text or content to the user's clipboard.
---

# Clipboard

A component for copying text or content to the user's clipboard.

## Usage

```svelte
<script>
  import {Clipboard} from 'ui-ingredients';
  import {CheckIcon, Copy01Icon} from '$lib/icons';
</script>

<Clipboard.Root value="pass your value">
  <Clipboard.Label>Label</Clipboard.Label>
  <Clipboard.Control>
    <Clipboard.Input />
    <Clipboard.Trigger>
      <Clipboard.Indicator>
        {#snippet children(ctx)}
          {#if ctx.copied}
            <Copy01Icon />
          {:else}
            <CheckIcon />
          {/if}
        {/snippet}
      </Clipboard.Indicator>
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>
```
