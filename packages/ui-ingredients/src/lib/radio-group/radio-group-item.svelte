<script lang="ts" module>
  import type {ItemProps, ItemState} from '@zag-js/radio-group';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface RadioGroupItemProps
    extends Assign<
      HtmlIngredientProps<'label', HTMLLabelElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {
    getRadioGroupContext,
    setRadioGroupItemPropsContext,
  } from './radio-group-context.svelte.js';

  let {
    ref = $bindable(null),
    children,
    asChild,
    ...props
  }: RadioGroupItemProps = $props();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['value', 'invalid', 'disabled'])(props),
  );

  let radioGroup = getRadioGroupContext();
  let itemState = $derived(radioGroup.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(radioGroup.getItemProps(itemProps), localProps),
  );

  setRadioGroupItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </label>
{/if}
