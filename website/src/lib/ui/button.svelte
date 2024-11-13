<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {twMerge} from 'tailwind-merge';

  let {children, ...props}: SvelteHTMLElements['button'] = $props();
</script>

<button type="button" {...props} class={twMerge('', props.class)}>
  {@render children?.()}
</button>
