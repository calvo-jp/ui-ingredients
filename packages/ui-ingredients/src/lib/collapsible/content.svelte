<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface CollapsibleContentProps extends SvelteHtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCollapsibleContext} from './context.svelte.js';

  let {children, ...props}: CollapsibleContentProps = $props();

  let context = useCollapsibleContext();

  let attrs = $derived(mergeProps(props, context.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
