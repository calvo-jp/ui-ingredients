<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/menu';

  export interface MenuItemGroupProps
    extends Assign<HtmlIngredientProps<'div'>, Omit<ItemGroupProps, 'id'>> {}
</script>

<script lang="ts">
  import {createUniqueId} from '$lib/utils.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    getMenuContext,
    setMenuItemGroupPropsContext,
  } from './context.svelte.js';

  let {id, children, ...props}: MenuItemGroupProps = $props();

  let context = getMenuContext();

  let uid = createUniqueId();

  let itemGroupProps: ItemGroupProps = setMenuItemGroupPropsContext(() => ({
    id: id ?? uid,
  }));

  let attrs = $derived(
    mergeProps(props, context.getItemGroupProps(itemGroupProps)),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
