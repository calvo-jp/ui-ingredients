<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/toggle-group';

  export interface ToggleGroupItemProps
    extends Assign<HtmlIngredientProps<'button', ItemState>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getToggleGroupContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToggleGroupItemProps = $props();

  let toggleGroup = getToggleGroupContext();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['value', 'disabled'])(props),
  );

  let itemState = $derived(toggleGroup.getItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(otherProps, toggleGroup.getItemProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.(itemState)}
  </button>
{/if}
