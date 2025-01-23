<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface HoverCardArrowProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getHoverCardContext} from './hover-card-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: HoverCardArrowProps = $props();

  let hoverCard = getHoverCardContext();
  let mergedProps = $derived(mergeProps(hoverCard.getArrowProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
