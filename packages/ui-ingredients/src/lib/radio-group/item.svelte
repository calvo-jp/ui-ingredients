<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/radio-group';
  import type {Snippet} from 'svelte';

  export interface RadioGroupItemProps
    extends Assign<Omit<HTMLProps<'label'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getRadioGroupContext,
    setRadioGroupItemPropsContext,
  } from './context.svelte.js';

  let {children, asChild, ...props}: RadioGroupItemProps = $props();

  let radioGroup = getRadioGroupContext();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['value', 'invalid', 'disabled'])(props),
  );

  let itemState = $derived(radioGroup.getItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(otherProps, radioGroup.getItemProps(itemProps)),
  );

  setRadioGroupItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <label {...mergedProps}>
    {@render children?.(itemState)}
  </label>
{/if}
