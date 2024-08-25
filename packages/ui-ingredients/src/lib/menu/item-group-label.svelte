<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface MenuItemGroupLabelProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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

<span {...attrs}>
  {@render children?.()}
</span>
