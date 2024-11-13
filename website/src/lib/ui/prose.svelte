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
    'prose',
    'prose-neutral',
    'prose-invert',
    'min-w-full',
    '[&_.shiki]:dark:!bg-[var(--shiki-dark-bg)]',
    '[&_.shiki]:dark:!text-[var(--shiki-dark)]',
  )}
  {...props}
>
  {@render children?.()}
</div>
