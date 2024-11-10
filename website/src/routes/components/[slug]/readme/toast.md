---
name: Toast
description: A component for displaying brief, non-intrusive notifications or messages.
---

- Create a `toaster` instance

```ts
// lib/toaster.svelte.ts
import {createToaster} from 'ui-ingredients';

export const toaster = createToaster({
  placement: 'bottom',
  overlap: true,
});
```

- Add `Toaster` and `Toast` components in your root layout

```svelte
<!-- +layout.svelte -->
<script lang="ts">
  import {XCloseIcon} from '$lib/icons';
  import {toaster} from '$lib/toaster.svelte.ts';
  import {Toaster, Toast} from 'ui-ingredients';

  let {children} = $props();
</script>

{@render children()}

<Toaster {toaster}>
  <Toast.Root>
    <Toast.Title />
    <Toast.Description />
    <Toast.CloseTrigger>
      <XCloseIcon />
    </Toast.CloseTrigger>
  </Toast.Root>
</Toaster>
```

- Use `toaster` in your components

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import {toaster} from '$lib/toaster.svelte.ts';
</script>

<button
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
