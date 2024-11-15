<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {twMerge} from 'tailwind-merge';

  let {children, ...props}: SvelteHTMLElements['div'] = $props();
</script>

<div
  data-scope="table"
  data-part="container"
  {...props}
  class={twMerge(
    'overflow-x-auto overflow-y-hidden rounded border border-neutral-800',
    props.class,
  )}
>
  {@render children?.()}
</div>
