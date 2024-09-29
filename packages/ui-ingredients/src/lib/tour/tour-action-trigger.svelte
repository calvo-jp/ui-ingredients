<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';

  export interface TourActionTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      StepActionTriggerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import type {StepActionTriggerProps} from '@zag-js/tour';
  import {getTourContext} from './tour-context.svelte.js';

  let {
    ref = $bindable(null),
    action,
    asChild,
    children,
    ...props
  }: TourActionTriggerProps = $props();

  let tour = getTourContext();

  let mergedProps = $derived(
    mergeProps(tour.getActionTriggerProps({action}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
