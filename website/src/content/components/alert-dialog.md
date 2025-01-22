---
id: alert-dialog
title: Alert Dialog
description: A component for displaying a modal dialog that requires user attention or confirmation.
---

<demo>

## Anatomy

<anatomy>

```svelte
<script>
  import {AlertDialog} from 'ui-ingredients';
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger>Trigger</AlertDialog.Trigger>
  <AlertDialog.Backdrop />
  <AlertDialog.Positioner>
    <AlertDialog.Content>
      <AlertDialog.Title>Title</AlertDialog.Title>
      <AlertDialog.Description>Description</AlertDialog.Description>
      <AlertDialog.CloseTrigger>Close</AlertDialog.CloseTrigger>
    </AlertDialog.Content>
  </AlertDialog.Positioner>
</AlertDialog.Root>
```

## API Reference

<api>

## Accessibility

### Keyboard Support

<keyboard-support>
