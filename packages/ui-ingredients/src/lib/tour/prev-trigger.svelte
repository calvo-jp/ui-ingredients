<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourPrevTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTourContext} from './context.svelte.js';

  let {asChild, children, ...props}: TourPrevTriggerProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(props, tour.getPrevTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
