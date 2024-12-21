<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {twMerge} from 'tailwind-merge';

  let {
    class: className,
    children,
    ...props
  }: SvelteHTMLElements['span'] = $props();
</script>

<span
  class={twMerge(
    'inline-block rounded-full border border-neutral-200 bg-neutral-50 px-1.5 py-px text-xs font-semibold dark:border-neutral-800 dark:bg-neutral-800/50',
    className,
  )}
  {...props}
>
  {@render children?.()}
</span>
