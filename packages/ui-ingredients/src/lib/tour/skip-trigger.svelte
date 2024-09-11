<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourSkipTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTourContext} from './context.svelte.js';

  let {asChild, children, ...props}: TourSkipTriggerProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(props, tour.getSkipTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
