<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface HoverCardTriggerProps
    extends HtmlIngredientProps<'a', HTMLAnchorElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getHoverCardContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: HoverCardTriggerProps = $props();

  let hoverCard = getHoverCardContext();

  let mergedProps = $derived(mergeProps(props, hoverCard.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <a bind:this={e} {...mergedProps}>
    {@render children?.()}
  </a>
{/if}
