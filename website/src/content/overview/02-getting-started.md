---
id: getting-started
title: Getting Started
description: Start incorporating UI Ingredients into your project today!
---

# Getting Started

Start incorporating UI Ingredients into your project today!

## Setup Guide

- Install UI Ingredients using your preferred package manager.

```bash
npm install ui-ingredients
```

- Import the components you need in your project.

```svelte
<script>
  import {Dialog, Portal} from 'ui-ingredients';
</script>

<Dialog.Root>
  <Dialog.Trigger />
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.CloseTrigger />
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
```

- Add styles to the component

```css
[data-scope='dialog'][data-part='backdrop'] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: var(--z-index);
}
```

- That's it

Great job! Your components are now set up and styled. Good luck! 😉
