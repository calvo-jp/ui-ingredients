<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['div'] = $props();
</script>

<div
  {...props}
  class={[
    'prose',
    'prose-neutral',
    'lg:prose-code:text-sm',
    'dark:prose-invert',
    'min-w-full',
    'prose-headings:font-lexend',
    'prose-a:underline-offset-2',

    'before:prose-p:content-none',
    'after:prose-p:content-none',
    'before:prose-code:content-none',
    'after:prose-code:content-none',

    '[&_.shiki]:dark:border',
    '[&_.shiki]:dark:border-neutral-800/40',
    '[&_.shiki]:!bg-neutral-50',
    '[&_.shiki_span]:!bg-transparent',
    '[&_.shiki]:dark:!bg-neutral-900/40',
    '[&_.shiki]:dark:!text-[var(--shiki-dark)]',
    '[&_.shiki_span]:dark:!text-[var(--shiki-dark)]',

    props.class,
  ]}
>
  {@render children?.()}
</div>
