<script lang="ts" module>
  import type {StepActionTriggerProps} from '@zag-js/tour';
  import type {HtmlIngredientProps} from '../types.js';

  export interface TourActionTriggerProps
    extends StepActionTriggerProps,
      HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
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
  <button bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {action.label}
    {/if}
  </button>
{/if}
