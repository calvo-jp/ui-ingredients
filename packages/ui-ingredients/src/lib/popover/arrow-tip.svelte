<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface PopoverArrowTipProps extends SvelteHtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePopoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverArrowTipProps = $props();

  let context = usePopoverContext();

  let attrs = $derived(mergeProps(props, context.getArrowTipProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
