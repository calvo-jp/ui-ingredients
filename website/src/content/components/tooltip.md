---
id: tooltip
title: Tooltip
description: A component for displaying brief, contextual information when hovering over or focusing on an element.
---

<demo>

## Anatomy

<anatomy>

## Usage

```svelte
<script>
  import {Portal, Tooltip} from 'ui-ingredients';
</script>

<Tooltip.Root>
  <Tooltip.Trigger>Trigger</Tooltip.Trigger>

  <Portal>
    <Tooltip.Positioner>
      <Tooltip.Content>
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>

        Content
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
```

## API Reference

<api>

## Accessibility

### Keyboard Support

<keyboard-support>
