## ⚠️ Deprecation Notice

This library will be deprecated in favor of the new [@ark-ui/svelte](https://github.com/chakra-ui/ark) package.

> Ark UI is a headless UI library with over 45+ components designed to build reusable, scalable Design Systems that works for a wide range of JS frameworks.

To learn more about **@ark-ui/svelte** and how to get started, check out the official blog post:  
👉 [Introducing ark-ui/svelte](https://ark-ui.com/blog/introducing-ark-ui-svelte)

While this library will remain available for reference, it is no longer actively maintained. We encourage you to explore and adopt [@ark-ui/svelte](https://github.com/chakra-ui/ark) for future projects.

Thanks for your support!

---

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

## Packages

- [ui-ingredients](https://github.com/calvo-jp/ui-ingredients/tree/main/packages/ui-ingredients)

  The core package

- [ui-ingredients-plugin-tailwindcss](https://github.com/calvo-jp/ui-ingredients/tree/main/packages/ui-ingredients-plugin-tailwindcss)

  [Tailwind](https://tailwindcss.com/) plugin to style the components using their data attributes.

## Credits

- [zag](https://zagjs.com/)
- [ark](https://ark-ui.com/)
- [@headlessui/tailwindcss](https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss)
- [@kobalte/tailwindcss](https://github.com/kobaltedev/kobalte/tree/main/packages/tailwindcss)

## Documentation

Browse the [documentation](https://ui-ingredients.vercel.app/) for more information on how to use UI Ingredients

[![MadeWithSvelte.com shield](https://madewithsvelte.com/storage/repo-shields/5566-shield.svg)](https://madewithsvelte.com/p/ui-ingredients/shield-link)
