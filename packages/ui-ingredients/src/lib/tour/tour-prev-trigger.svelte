<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourPrevTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTourContext} from './tour-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TourPrevTriggerProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(mergeProps(props, tour.getPrevTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
