<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourArrowProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTourContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TourArrowProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(props, tour.getArrowProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
