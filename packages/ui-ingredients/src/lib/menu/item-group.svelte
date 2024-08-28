<script lang="ts" module>
  import type {Snippet} from 'svelte';

  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {ItemGroupProps} from '@zag-js/menu';

  export interface MenuItemGroupProps extends Assign<HtmlProps<'div'>, Omit<ItemGroupProps, 'id'>> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
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

  let attrs = $derived(mergeProps(props, menu.getItemGroupProps(itemGroupProps)));

  menuItemGroupPropsContext.set(() => itemGroupProps);
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
