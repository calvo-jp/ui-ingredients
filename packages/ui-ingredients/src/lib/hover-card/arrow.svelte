<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface HoverCardArrowProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {hoverCardContext} from './context.svelte.js';

  let {asChild, children, ...props}: HoverCardArrowProps = $props();

  let hoverCard = hoverCardContext.get();

  let attrs = $derived(mergeProps(props, hoverCard.getArrowProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
