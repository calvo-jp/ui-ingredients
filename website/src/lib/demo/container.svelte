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
  class={twMerge('not-prose rounded bg-neutral-900/35 p-16', className)}
  {...props}
>
  {@render children?.()}
</div>
