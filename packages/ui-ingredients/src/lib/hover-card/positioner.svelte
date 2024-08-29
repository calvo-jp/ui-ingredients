<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface HoverCardPositionerProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {hoverCardContext} from './context.svelte.js';

  let {asChild, children, ...props}: HoverCardPositionerProps = $props();

  let hoverCard = hoverCardContext.get();

  let attrs = $derived(mergeProps(props, hoverCard.getPositionerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
