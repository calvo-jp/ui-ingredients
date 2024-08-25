<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface HoverCardPositionerProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {hoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardPositionerProps = $props();

  let hoverCard = hoverCardContext.get();

  let attrs = $derived(mergeProps(props, hoverCard.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
