# Styling

**UI Ingredients** doesn't include built-in styles, giving you the freedom to customize components with your preferred styling solution. Whether you choose [Tailwind](https://tailwindcss.com/), [Panda](https://panda-css.com/), or native CSS, you have the flexibility to create a look that suits your needs.

## Styling a component part

Each component is made up of several distinct parts that can be individually styled. For example, the `Dialog` component includes component like the Trigger, Content, and Backdrop.

The `data-part` attribute can be used to select and style a component part.

Here's an example of how you might use the `Dialog` component in your code

```svelte
<script lang="ts">
  import {Dialog} from 'ui-ingredients';
</script>

<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Backdrop />
  <Dialog.Positioner>
    <Dialog.Content>
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>Description</Dialog.Description>
      <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>

<style>
  [data-part='backdrop'] {
    background-color: rgba(0, 0, 0, 0.5);
  }

  [data-part='content'] {
    padding: 2rem;
    border-radius: 0.65rem;
    background-color: white;
  }
</style>
```

## Styling a state

Every part of the component can have multiple states, `data-*` attributes will be attached which represents the specific state. For example, a `Dialog.Content` can have:

- `data-state="open"` — When the dialog is open.
- `data-state="closed"` — When the dialog is closed.

You can customize the styles and animations for the `Dialog.Content` by using CSS attribute selectors like so

```svelte
<style>
  [data-part='content'][data-state='open'] {
    animation: fade-in 200ms ease-in-out;
  }

  [data-part='content'][data-state='closed'] {
    animation: fade-out 200ms ease-in-out;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
```