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
    setMenuItemGroupPropsContext,
    useMenuContext,
  } from './context.svelte.js';

  let {id, children, ...props}: MenuItemGroupProps = $props();

  let context = useMenuContext();

  let uid = createUniqueId();

  let attrs = $derived(
    mergeProps(props, context.getItemGroupProps({id: id ?? uid})),
  );

  setMenuItemGroupPropsContext({id: id ?? uid});
</script>

<div {...attrs}>
  {@render children?.()}
</div>
