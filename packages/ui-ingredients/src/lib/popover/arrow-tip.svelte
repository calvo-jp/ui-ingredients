<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PopoverArrowTipProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {popoverContext} from './context.svelte.js';

  let {children, ...props}: PopoverArrowTipProps = $props();

  let context = popoverContext.get();

  let attrs = $derived(mergeProps(props, context.getArrowTipProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
