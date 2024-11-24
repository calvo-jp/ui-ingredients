# UI Ingredients

Headless component library for [Svelte](https://svelte.dev/) powered by [zag](https://zagjs.com/)

## Installation

```bash
npm install ui-ingredients
```

## Usage

```svelte
<script>
  import {Dialog, Portal} from 'ui-ingredients';
  import {XCloseIcon, Button} from '$lib/icons';
</script>

<Dialog.Root lazyMount keepMounted>
  <Dialog.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Open</Button>
    {/snippet}
  </Dialog.Trigger>

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

## Inspiration

- [zag](https://zagjs.com/) - The fantastic library that powers UI ingredients
- [ark](https://ark-ui.com/) - The outstanding headless component library that greatly inspired this one

## Documentation

Browse the [documentation](https://ui-ingredients.vercel.app/) for more information on how to use UI Ingredients
