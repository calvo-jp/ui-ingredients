<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {StepActionTriggerProps} from '@zag-js/tour';

  export interface TourActionTriggerProps
    extends StepActionTriggerProps,
      HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
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
    {#if children}
      {@render children?.()}
    {:else}
      {action.label}
    {/if}
  </button>
{/if}
