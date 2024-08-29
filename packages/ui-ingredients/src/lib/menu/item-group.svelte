<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/menu';

  export interface MenuItemGroupProps extends Assign<HTMLProps<'div'>, Omit<ItemGroupProps, 'id'>> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {createUniqueId, mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuItemGroupPropsContext} from './context.svelte.js';

  let {id, asChild, children, ...props}: MenuItemGroupProps = $props();

  let menu = menuContext.get();

  let uid = createUniqueId();

  let itemGroupProps = $derived({
    id: id ?? uid,
  });

  let mergedProps = $derived(mergeProps(props, menu.getItemGroupProps(itemGroupProps)));

  menuItemGroupPropsContext.set(() => itemGroupProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
