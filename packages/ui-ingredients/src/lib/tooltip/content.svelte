<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TooltipContentProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tooltipContext} from './context.svelte.js';

  let {children, ...props}: TooltipContentProps = $props();

  let tooltip = tooltipContext.get();

  let attrs = $derived(mergeProps(props, tooltip.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
