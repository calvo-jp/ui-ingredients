---
id: drawer
title: Drawer
description: A component that slides in from the edge of the screen to display additional content or navigation options.
---

# {title}

{description}

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {Drawer} from 'ui-ingredients';
  import {XCloseIcon} from '$lib/icons';
</script>

<Drawer.Root>
  <Drawer.Trigger>Trigger</Drawer.Trigger>
  <Drawer.Backdrop />
  <Drawer.Positioner>
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Title</Drawer.Title>
        <Drawer.Description>Description</Drawer.Description>
      </Drawer.Header>
      <Drawer.Body>Body Content</Drawer.Body>
      <Drawer.Footer>
        <Drawer.CloseTrigger>Close</Drawer.CloseTrigger>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Positioner>
</Drawer.Root>
```

## API Reference

<api>

## Accessibility

### Keyboard Support

<keyboard-support>
