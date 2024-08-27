<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface HoverCardTriggerProps extends HtmlProps<'a'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {hoverCardContext} from './context.svelte.js';

  let {children, ...props}: HoverCardTriggerProps = $props();

  let hoverCard = hoverCardContext.get();

  let attrs = $derived(mergeProps(props, hoverCard.getTriggerProps()));
</script>

<a {...attrs}>
  {@render children?.()}
</a>
