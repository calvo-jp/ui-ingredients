<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface TooltipArrowProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTooltipContext} from './context.svelte.js';

  let {children, ...props}: TooltipArrowProps = $props();

  let context = useTooltipContext();

  let attrs = $derived(mergeProps(props, context.getArrowProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
