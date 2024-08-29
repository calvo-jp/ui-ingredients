<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface HoverCardArrowTipProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {hoverCardContext} from './context.svelte.js';

  let {asChild, children, ...props}: HoverCardArrowTipProps = $props();

  let hoverCard = hoverCardContext.get();

  let mergedProps = $derived(mergeProps(props, hoverCard.getArrowTipProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
