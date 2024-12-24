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
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
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

  let steps = getStepsContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['index'])(props),
  );

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
