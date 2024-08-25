<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TooltipTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tooltipContext} from './context.svelte.js';

  let {children, ...props}: TooltipTriggerProps = $props();

  let tooltip = tooltipContext.get();

  let attrs = $derived(mergeProps(props, tooltip.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
