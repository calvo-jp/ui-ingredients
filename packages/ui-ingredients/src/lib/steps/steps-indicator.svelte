<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface StepsIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
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
  }: StepsIndicatorProps = $props();

  let steps = getStepsContext();
  let itemProps = getStepsItemPropsContext();
  let mergedProps = $derived(
    mergeProps(steps.getIndicatorProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
