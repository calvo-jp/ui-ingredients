<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface HoverCardContentProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {hoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardContentProps = $props();

  let hoverCard = hoverCardContext.get();

  let attrs = $derived(mergeProps(props, hoverCard.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
