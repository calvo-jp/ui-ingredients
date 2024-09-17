<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/menu';

  export interface MenuItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getMenuContext} from './menu-context.svelte.js';

  let {this: e, asChild, children, ...props}: MenuItemProps = $props();

  let menu = getMenuContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>([
      'value',
      'valueText',
      'disabled',
      'closeOnSelect',
    ])(props),
  );

  let itemState = $derived(menu.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(localProps, menu.getItemProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
