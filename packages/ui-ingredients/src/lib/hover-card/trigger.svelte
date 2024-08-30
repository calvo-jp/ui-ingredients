<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface HoverCardTriggerProps extends HTMLProps<'a'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {hoverCardContext} from './context.svelte.js';

  let {asChild, children, ...props}: HoverCardTriggerProps = $props();

  let hoverCard = hoverCardContext.get();

  let mergedProps = $derived(mergeProps(props, hoverCard.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <a {...mergedProps}>
    {@render children?.()}
  </a>
{/if}
