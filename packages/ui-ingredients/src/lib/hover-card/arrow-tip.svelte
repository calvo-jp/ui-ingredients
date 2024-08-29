<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface HoverCardArrowTipProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {hoverCardContext} from './context.svelte.js';

  let {asChild, children, ...props}: HoverCardArrowTipProps = $props();

  let hoverCard = hoverCardContext.get();

  let attrs = $derived(mergeProps(props, hoverCard.getArrowTipProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
