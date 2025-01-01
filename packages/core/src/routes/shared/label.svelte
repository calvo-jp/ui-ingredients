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
  class={[twMerge('text-muted mb-1 block font-medium'), className]}
  {...props}
>
  {@render children?.()}
</label>
