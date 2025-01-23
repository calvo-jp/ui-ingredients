<script lang="ts" module>
  import type {ItemProps, ItemState} from '@zag-js/menu';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface MenuItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {getMenuContext} from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuItemProps = $props();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>([
      'closeOnSelect',
      'disabled',
      'value',
      'valueText',
    ])(props),
  );

  let menu = getMenuContext();
  let itemState = $derived(menu!.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(menu!.getItemProps(itemProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
