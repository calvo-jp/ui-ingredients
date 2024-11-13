---
name: Clipboard
description: A component for copying text or content to the user's clipboard.
---

## Usage

```svelte
<script lang="ts">
  import {Clipboard} from 'ui-ingredients';
  import {CheckIcon, Copy01Icon} from '$lib/icons';
</script>

<Clipboard.Root value="pass your value">
  <Clipboard.Label>Label</Clipboard.Label>

  <Clipboard.Control>
    <Clipboard.Input />

    <Clipboard.Trigger>
      <Clipboard.Indicator>
        <Copy01Icon />
      </Clipboard.Indicator>
      <Clipboard.Indicator copied>
        <CheckIcon />
      </Clipboard.Indicator>
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>
```
