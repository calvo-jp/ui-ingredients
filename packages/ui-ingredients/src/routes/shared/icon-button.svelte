<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {cx} from './utils.js';

  let {
    class: className,
    children,
    ...props
  }: SvelteHTMLElements['button'] = $props();
</script>

<button
  type="button"
  class={cx(
    'flex size-12 shrink-0 items-center justify-center rounded border transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50',
    className,
  )}
  {...props}
>
  {@render children?.()}
</button>
