<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuOptionItemIndicatorProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getMenuContext,
    getMenuOptionItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: MenuOptionItemIndicatorProps = $props();

  let context = getMenuContext();

  let optionItemProps = getMenuOptionItemPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getItemIndicatorProps(optionItemProps)),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
