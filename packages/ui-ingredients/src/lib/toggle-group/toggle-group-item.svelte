<script lang="ts" module>
  import type {ItemProps, ItemState} from '@zag-js/toggle-group';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface ToggleGroupItemProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {getToggleGroupContext} from './toggle-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ToggleGroupItemProps = $props();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['value', 'disabled'])(props),
  );

  let toggleGroup = getToggleGroupContext();
  let itemState = $derived(toggleGroup.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(toggleGroup.getItemProps(itemProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </button>
{/if}
