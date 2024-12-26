# ui-ingredients-plugin-tailwindcss

A [TailwindCSS](https://tailwindcss.com/) plugin to style [UI Ingredients](https://ui-ingredients.vercel.app/) components using their data attributes.

## Installation

```bash
npm install ui-ingredients-plugin-tailwindcss
```

## Usage

Add the plugin to your tailwind config

```ts
// tailwind.config.ts
import uiIngredients from 'ui-ingredients-plugin-tailwindcss';
import {Config} from 'tailwindcss';

export default {
  content: ['./app.html', './src/**/*.{html,js,svelte,ts}'],
  plugins: [
    // using the default prefix: "ui"
    uiIngredients,

    // or using a custom prefix
    uiIngredients({
      prefix: 'custom-prefix',
    }),
  ],
} satisfies Config
```

Style your components

```svelte
<script>
  import {Field} from '@ark-ui/react';
</script>

<Field.Root>
  <Field.Input
    className="ui-invalid:border-red-300 ui-readonly:border-gray-200"
  />
</Field.Root>
```

### Example using the Dialog component

```ts
// tailwind.config.ts
import uiIngredients from 'ui-ingredients-plugin-tailwindcss';
import {Config} from 'tailwindcss';

export default {
  content: ['./app.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          from: {opacity: '0'},
          to: {opacity: '1'},
        },
        'fade-out': {
          from: {opacity: '1'},
          to: {opacity: '0'},
        },
      },
      animation: {
        'fade-in': 'fade-in 250ms ease-in-out',
        'fade-out': 'fade-out 150ms ease-in-out',
      },
    },
  },
  plugins: [uiIngredients],
} satisfies Config;
```

```svelte
<script>
  import {Dialog} from 'ui-ingredients';
</script>

<Dialog.Root>
  <Dialog.Trigger
    className="bg-neutral-900 rounded text-white font-semibold h-11 px-4"
  >
    Open
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop
      className="fixed inset-0 bg-black/50 ui-open:animate-fade-in ui-closed:animate-fade-out"
    />
    <Dialog.Positioner>
      <Dialog.Content
        className="fixed max-w-[24rem] rounded w-full left-1/2 -translate-x-1/2 my-16 p-4 bg-white ui-open:animate-fade-in ui-closed:animate-fade-out"
      >
        <Dialog.Title className="text-neutral-800 text-xl font-bold">
          Title
        </Dialog.Title>
        <Dialog.Description className="text-neutral-600">
          Description
        </Dialog.Description>
        <Dialog.CloseTrigger
          className="border border-neutral-300 h-11 w-full rounded mt-4"
        >
          Close
        </Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
```

## Further Reading

This library is powered by [tailwindcss-plugin-zag](https://github.com/calvo-jp/tailwindcss-plugin-zag). See the the full documentation [here](https://github.com/calvo-jp/tailwindcss-plugin-zag)
