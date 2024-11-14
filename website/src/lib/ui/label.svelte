<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {twMerge} from 'tailwind-merge';

  let {
    class: className,
    children,
    ...props
  }: SvelteHTMLElements['label'] = $props();
</script>

<label
  class={twMerge('!mb-1 block text-sm font-semibold', className)}
  {...props}
>
  {@render children?.()}
</label>
