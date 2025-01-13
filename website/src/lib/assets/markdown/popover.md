---
title: Popover
description: A component that displays additional content or information in a small overlay when triggered.
---

## Usage

```svelte
<script>
  import {Popover} from 'ui-ingredients';
  import {XCloseIcon} from '$lib/icons';
</script>

<Popover.Root>
  <Popover.Trigger>Trigger</Popover.Trigger>
  <Popover.Positioner>
    <Popover.Content>
      <Popover.Arrow>
        <Popover.ArrowTip />
      </Popover.Arrow>

      <Popover.Title>Title</Popover.Title>
      <Popover.Description>Description</Popover.Description>
      <Popover.CloseTrigger>
        <XCloseIcon />
      </Popover.CloseTrigger>
    </Popover.Content>
  </Popover.Positioner>
</Popover.Root>
```
