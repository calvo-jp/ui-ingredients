<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourDescriptionProps extends HtmlIngredientProps<'p'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTourContext} from './context.svelte.js';

  let {asChild, children, ...props}: TourDescriptionProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(props, tour.getDescriptionProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p {...mergedProps}>
    {@render children?.()}
  </p>
{/if}
