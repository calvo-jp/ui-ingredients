<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/steps';

  export interface StepsItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
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
