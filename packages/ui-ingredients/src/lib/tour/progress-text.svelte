<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourProgressTextProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTourContext} from './context.svelte.js';

  let {asChild, children, ...props}: TourProgressTextProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(props, tour.getProgressTextProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {tour.getProgressText()}
    {/if}
  </span>
{/if}
