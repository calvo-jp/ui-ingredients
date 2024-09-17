<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/toggle-group';

  export interface ToggleGroupItemProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getToggleGroupContext} from './toggle-group-context.svelte.js';

  let {this: e, asChild, children, ...props}: ToggleGroupItemProps = $props();

  let toggleGroup = getToggleGroupContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['value', 'disabled'])(props),
  );

  let itemState = $derived(toggleGroup.getItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(localProps, toggleGroup.getItemProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.(itemState)}
  </button>
{/if}
