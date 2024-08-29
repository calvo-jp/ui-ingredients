<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface HoverCardTriggerProps extends HtmlProps<'a'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {hoverCardContext} from './context.svelte.js';

  let {asChild, children, ...props}: HoverCardTriggerProps = $props();

  let hoverCard = hoverCardContext.get();

  let attrs = $derived(mergeProps(props, hoverCard.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <a {...attrs}>
    {@render children?.()}
  </a>
{/if}
