# UI Ingredients

Headless component library for [Svelte](https://svelte.dev/) powered by [zag](https://zagjs.com/)

## Installation

```bash
npm install ui-ingredients ui-ingredients-plugin-tailwindcss
```

## Usage

```svelte
<script>
  import {Dialog, Portal} from 'ui-ingredients';
  import {XCloseIcon} from '$lib/icons';
  import {Button} from '$lib/ui';
</script>

<Dialog.Root lazyMount keepMounted>
  <Dialog.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Open</Button>
    {/snippet}
  </Dialog.Trigger>

  <Portal>
    <Dialog.Backdrop
      class="ui-open:animate-fade-in ui-closed:animate-fade-out"
    />
    <Dialog.Positioner>
      <Dialog.Content
        class="ui-open:animate-fade-in ui-closed:animate-fade-out"
      >
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

## Packages

- [ui-ingredients](https://github.com/calvo-jp/ui-ingredients/tree/main/packages/ui-ingredients)
- [ui-ingredients-plugin-tailwindcss](https://github.com/calvo-jp/ui-ingredients/tree/main/packages/ui-ingredients-plugin-tailwindcss)

## Credits

- [zag](https://zagjs.com/)
- [ark](https://ark-ui.com/)
- [@headlessui/tailwindcss](https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss)
- [@kobalte/tailwindcss](https://github.com/kobaltedev/kobalte/tree/main/packages/tailwindcss)

## Documentation

Browse the [documentation](https://ui-ingredients.vercel.app/) for more information on how to use UI Ingredients
