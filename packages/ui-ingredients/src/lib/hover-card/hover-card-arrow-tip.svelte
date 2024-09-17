<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface HoverCardArrowTipProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getHoverCardContext} from './hover-card-context.svelte.js';

  let {this: e, asChild, children, ...props}: HoverCardArrowTipProps = $props();

  let hoverCard = getHoverCardContext();

  let mergedProps = $derived(mergeProps(props, hoverCard.getArrowTipProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
