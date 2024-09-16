<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourArrowTipProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTourContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TourArrowTipProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(props, tour.getArrowTipProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
