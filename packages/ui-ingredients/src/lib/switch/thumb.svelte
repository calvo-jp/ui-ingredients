<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface SwitchThumbProps extends SvelteHtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSwitchContext} from './context.svelte.js';

  let {children, ...props}: SwitchThumbProps = $props();

  let context = useSwitchContext();

  let attrs = $derived(mergeProps(props, context.getThumbProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
