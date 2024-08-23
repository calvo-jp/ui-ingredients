<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuItemGroupLabelProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getMenuContext,
    getMenuItemGroupPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: MenuItemGroupLabelProps = $props();

  let context = getMenuContext();

  let itemGroupProps = getMenuItemGroupPropsContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemGroupLabelProps({
        htmlFor: itemGroupProps.id,
      }),
    ),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
