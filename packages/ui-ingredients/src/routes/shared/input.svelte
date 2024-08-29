<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {cx} from './utils.js';

  let {class: className, ...props}: SvelteHTMLElements['input'] = $props();
</script>

<input
  class={cx(
    'block h-12 w-full rounded border bg-transparent px-4 placeholder:text-neutral-600',
    className,
  )}
  {...props}
/>
