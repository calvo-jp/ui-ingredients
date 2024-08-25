<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface PopoverArrowProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {popoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverArrowProps = $props();

  let popover = popoverContext.get();

  let attrs = $derived(mergeProps(props, popover.getArrowProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
