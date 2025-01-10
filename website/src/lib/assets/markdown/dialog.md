---
title: Dialog
description: A component for displaying modal windows or pop-up messages.
---

<script>
  import {DialogDemo} from '$lib/demo';
  import {Anatomy} from '$lib/anatomy';
  import {Api} from '$lib/api';
  import {Accessibility} from '$lib/accessibility';
  import Metadata from '$lib/metadata.svelte';
  import PageHeading from '$lib/page-heading.svelte';
</script>

<svelte:head>

  <title>UI Ingredients | {title}</title>
</svelte:head>

<Metadata title="{title}" description="{description}" />
<PageHeading title="{title}" description="{description}" />

<DialogDemo />

## Anatomy

<Anatomy id="dialog" />

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

## API Reference

<Api id="dialog" />

## Accessibility

<Accessibility id="dialog" />
