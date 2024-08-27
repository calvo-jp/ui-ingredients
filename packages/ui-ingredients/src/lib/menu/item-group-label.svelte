<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface MenuItemGroupLabelProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuItemGroupPropsContext} from './context.svelte.js';

  let {children, ...props}: MenuItemGroupLabelProps = $props();

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

<div {...attrs}>
  {@render children?.()}
</div>
