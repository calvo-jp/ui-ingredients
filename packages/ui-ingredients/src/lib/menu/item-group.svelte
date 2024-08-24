<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/menu';

  export interface MenuItemGroupProps
    extends Assign<HtmlProps<'div'>, Omit<ItemGroupProps, 'id'>> {}
</script>

<script lang="ts">
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {menuContext, menuItemGroupPropsContext} from './context.svelte.js';

  let {id, children, ...props}: MenuItemGroupProps = $props();

  let context = menuContext.get();

  let uid = createUniqueId();

  let itemGroupProps = $derived({
    id: id ?? uid,
  });

  let attrs = $derived(mergeProps(props, context.getItemGroupProps(itemGroupProps)));

  menuItemGroupPropsContext.set(() => itemGroupProps);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
