<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {twMerge} from 'tailwind-merge';

  let {
    children,
    class: className,
    ...props
  }: SvelteHTMLElements['div'] = $props();
</script>

<div
  class={twMerge(
    'not-prose rounded-md border border-neutral-800/40 bg-neutral-900/40 p-5 md:p-10 lg:p-12',
    className,
  )}
  {...props}
>
  {@render children?.()}
</div>
