<script lang="ts" module>
  import type {ItemProps, ItemState} from '@zag-js/steps';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface StepsItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {
    getStepsContext,
    setStepsItemPropsContext,
  } from './steps-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: StepsItemProps = $props();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['index'])(props),
  );

  let steps = getStepsContext();
  let itemState = $derived(steps.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(steps.getItemProps(itemProps), localProps),
  );

  setStepsItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
