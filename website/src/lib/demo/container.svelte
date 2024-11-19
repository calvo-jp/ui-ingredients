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
    'not-prose rounded-md bg-neutral-50 p-5 dark:border dark:border-neutral-800/40 dark:bg-neutral-900/40 md:p-10 lg:p-12',
    className,
  )}
  {...props}
>
  {@render children?.()}
</div>
