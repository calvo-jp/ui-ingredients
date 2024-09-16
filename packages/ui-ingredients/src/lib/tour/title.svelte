<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourTitleProps
    extends HtmlIngredientProps<'h2', HTMLHeadingElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTourContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TourTitleProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(props, tour.getTitleProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <h2 bind:this={e} {...mergedProps}>
    {@render children?.()}
  </h2>
{/if}
