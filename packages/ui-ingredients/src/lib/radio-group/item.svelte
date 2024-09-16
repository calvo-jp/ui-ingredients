<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/radio-group';

  export interface RadioGroupItemProps
    extends Assign<
      HtmlIngredientProps<'label', HTMLLabelElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getRadioGroupContext,
    setRadioGroupItemPropsContext,
  } from './context.svelte.js';

  let {this: e, children, asChild, ...props}: RadioGroupItemProps = $props();

  let radioGroup = getRadioGroupContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['value', 'invalid', 'disabled'])(props),
  );

  let itemState = $derived(radioGroup.getItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(localProps, radioGroup.getItemProps(itemProps)),
  );

  setRadioGroupItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <label bind:this={e} {...mergedProps}>
    {@render children?.(itemState)}
  </label>
{/if}
