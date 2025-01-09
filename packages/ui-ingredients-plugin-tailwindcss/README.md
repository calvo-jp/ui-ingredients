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
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    // using the default prefix: "ui"
    uiIngredients,

    // or using a custom prefix
    uiIngredients({
      prefix: 'custom-prefix',
    }),
  ],
} satisfies Config;
```

Style your components

```svelte
<script>
  import {Field} from 'ui-ingredients';
</script>

<Field.Root>
  <Field.Input class="ui-invalid:border-red-300 ui-readonly:border-gray-200" />
</Field.Root>
```

### Example using the Dialog component

```ts
// tailwind.config.ts
import uiIngredients from 'ui-ingredients-plugin-tailwindcss';
import {Config} from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
    class="h-11 rounded bg-neutral-900 px-4 font-semibold text-white"
  >
    Open
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop
      class="fixed inset-0 bg-black/50 ui-open:animate-fade-in ui-closed:animate-fade-out"
    />
    <Dialog.Positioner>
      <Dialog.Content
        class="fixed left-1/2 my-16 w-full max-w-[24rem] -translate-x-1/2 rounded bg-white p-4 ui-open:animate-fade-in ui-closed:animate-fade-out"
      >
        <Dialog.Title class="text-xl font-bold text-neutral-800">
          Title
        </Dialog.Title>
        <Dialog.Description class="text-neutral-600">
          Description
        </Dialog.Description>
        <Dialog.CloseTrigger
          class="mt-4 h-11 w-full rounded border border-neutral-300"
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
