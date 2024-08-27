<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface MenuOptionItemIndicatorProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {children, ...props}: MenuOptionItemIndicatorProps = $props();

  let menu = menuContext.get();
  let optionItemProps = menuOptionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, menu.getItemIndicatorProps(optionItemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
