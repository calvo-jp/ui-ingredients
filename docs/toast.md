# Toast

## Usage

- Create a `useToaster` utility

```ts
// lib/use-toaster.svelte.ts
import {createToaster, type CreateToasterReturn} from '$lib/index.js';

let toaster: CreateToasterReturn;

export function useToaster() {
  if (!toaster) {
    toaster = createToaster({
      placement: 'bottom',
      overlap: true,
    });
  }

  return toaster;
}
```

- Add `Toaster` in your root layout

```svelte
<!-- +layout.svelte -->
<script>
  import {Toaster} from 'ui-ingredients';

  let {children} = $props();
</script>

{@render children()}

<Toaster />
```

- Use `toaster` in your components

```svelte
<!-- +page.svelte -->
<script>
  import {useToaster} from '$lib/use-toaster.svelte.ts';

  let toaster = useToaster();
</script>

<button
  type="button"
  onclick={function () {
    toaster.create({
      title: 'Title',
      description: 'Description',
    });
  }}
>
  Create
</button>
```
