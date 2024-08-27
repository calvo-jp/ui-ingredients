<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/menu';

  export interface MenuItemGroupProps
    extends Assign<HtmlProps<'div'>, Omit<ItemGroupProps, 'id'>> {}
</script>

<script lang="ts">
  import {createUniqueId, mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuItemGroupPropsContext} from './context.svelte.js';

  let {id, children, ...props}: MenuItemGroupProps = $props();

  let menu = menuContext.get();

  let uid = createUniqueId();

  let itemGroupProps = $derived({
    id: id ?? uid,
  });

  let attrs = $derived(mergeProps(props, menu.getItemGroupProps(itemGroupProps)));

  menuItemGroupPropsContext.set(() => itemGroupProps);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
