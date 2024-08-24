<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface HoverCardArrowTipProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {hoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardArrowTipProps = $props();

  let context = hoverCardContext.get();

  let attrs = $derived(mergeProps(props, context.getArrowTipProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
