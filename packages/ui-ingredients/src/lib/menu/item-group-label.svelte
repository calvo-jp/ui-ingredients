<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface MenuItemGroupLabelProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
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
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
