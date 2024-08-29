<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface HoverCardContentProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {hoverCardContext} from './context.svelte.js';

  let {asChild, children, ...props}: HoverCardContentProps = $props();

  let hoverCard = hoverCardContext.get();

  let mergedProps = $derived(mergeProps(props, hoverCard.getContentProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
