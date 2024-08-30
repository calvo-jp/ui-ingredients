<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface MenuItemGroupProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {uid} from 'uid';
  import {menuContext, menuItemGroupPropsContext} from './context.svelte.js';

  let {id, asChild, children, ...props}: MenuItemGroupProps = $props();

  let menu = menuContext.get();

  let id_ = uid();

  let itemGroupProps = $derived({
    id: id ?? id_,
  });

  let mergedProps = $derived(
    mergeProps(props, menu.getItemGroupProps(itemGroupProps)),
  );

  menuItemGroupPropsContext.set(() => itemGroupProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
