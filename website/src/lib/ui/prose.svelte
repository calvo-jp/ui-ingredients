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
    'dark:prose-invert',
    'min-w-full',
    'prose-code:after:[content:""]',
    'prose-code:before:[content:""]',
    '[&_[data-scope="table"][data-part="container"]_[data-scope="table"][data-part="root"]]:m-0',
    '[&_.shiki]:dark:!bg-[var(--shiki-dark-bg)]',
    '[&_.shiki]:dark:!text-[var(--shiki-dark)]',
    '[&_.shiki_span]:dark:!bg-[var(--shiki-dark-bg)]',
    '[&_.shiki_span]:dark:!text-[var(--shiki-dark)]',
  )}
  {...props}
>
  {@render children?.()}
</div>
