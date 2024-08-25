<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface HoverCardArrowProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {hoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardArrowProps = $props();

  let hoverCard = hoverCardContext.get();

  let attrs = $derived(mergeProps(props, hoverCard.getArrowProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
