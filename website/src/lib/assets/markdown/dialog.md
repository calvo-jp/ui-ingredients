---
title: Dialog
description: A component for displaying modal windows or pop-up messages.
---

## Usage

```svelte
<script>
  import {Dialog, Portal} from 'ui-ingredients';
  import {XCloseIcon} from '$lib/icons';
</script>

<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>

  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.Description>Description</Dialog.Description>
        <Dialog.CloseTrigger>
          <XCloseIcon />
        </Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
```
