# Toast

A component for displaying brief, non-intrusive notifications or messages.

## Usage

- Create a `useToaster` utility

```ts
// lib/use-toaster.svelte.ts
import {createToaster, type CreateToasterReturn} from 'ui-ingredients';

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

- Add `Toaster` and `Toast` components in your root layout

```svelte
<!-- +layout.svelte -->
<script>
  import {useToaster} from '$lib/use-toaster.svelte.ts';
  import {Toaster, Toast} from 'ui-ingredients';

  let {children} = $props();
  let toaster = useToaster();
</script>

{@render children()}

<Toaster {toaster}>
  <Toast.Root>
    <Toast.Title />
    <Toast.Description />
    <Toast.CloseTrigger>Close</Toast.CloseTrigger>
  </Toast.Root>
</Toaster>
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
