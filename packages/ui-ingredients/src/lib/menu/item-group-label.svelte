<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface MenuItemGroupLabelProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuItemGroupPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuItemGroupLabelProps = $props();

  let menu = menuContext.get();
  let itemGroupProps = menuItemGroupPropsContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      menu.getItemGroupLabelProps({
        htmlFor: itemGroupProps.id,
      }),
    ),
  );
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
