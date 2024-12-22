# ui-ingredients-plugin-tailwindcss

A TailwindCSS plugin for styling UI Ingredients components by their data-\* attributes.

## Installation

```bash
npm install ui-ingredients-plugin-tailwindcss
```

## Usage

Add the plugin to your tailwind config

```ts
// tailwind.config.ts
import type {Config} from 'tailwindcss';
import uiIngredients from 'ui-ingredients-plugin-tailwindcss';

const config: Config ={
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [uiIngredients],
}

export default config;
```

Style your components using data-\* attributes

```svelte
<script>
  import {Field} from 'ui-ingredients';
</script>

<Field.Root required>
  <Field.Input class="ui-invalid:border-red-300 ui-readonly:border-gray-200" />
</Field.Root>
```

### Using a different class name prefix

```ts
// tailwind.config.ts
import type {Config} from 'tailwindcss';
import uiIngredients from 'ui-ingredients-plugin-tailwindcss';

const config: Config ={
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [uiIngredients({
    prefix: 'tw'
  })],
}

export default config;
```

```svelte
<script>
  import {Field} from 'ui-ingredients';
</script>

<Field.Root required>
  <Field.Input class="tw-invalid:border-red-300 tw-readonly:border-gray-200" />
</Field.Root>
```
