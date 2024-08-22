<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TooltipContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTooltipContext} from './context.svelte.js';

  let {children, ...props}: TooltipContentProps = $props();

  let context = useTooltipContext();

  let attrs = $derived(mergeProps(props, context.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
