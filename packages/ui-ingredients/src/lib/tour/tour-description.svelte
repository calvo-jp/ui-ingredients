<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourDescriptionProps
    extends HtmlIngredientProps<'p', HTMLParagraphElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTourContext} from './tour-context.svelte.js';

  let {this: e, asChild, children, ...props}: TourDescriptionProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(props, tour.getDescriptionProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p bind:this={e} {...mergedProps}>
    {@render children?.()}
  </p>
{/if}
