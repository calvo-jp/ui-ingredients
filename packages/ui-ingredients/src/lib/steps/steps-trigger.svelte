<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface StepsTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getStepsContext,
    getStepsItemPropsContext,
  } from './steps-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: StepsTriggerProps = $props();

  let steps = getStepsContext();
  let itemProps = getStepsItemPropsContext();
  let mergedProps = $derived(
    mergeProps(steps.getTriggerProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
