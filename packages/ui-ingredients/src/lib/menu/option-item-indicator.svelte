<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface MenuOptionItemIndicatorProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {children, ...props}: MenuOptionItemIndicatorProps = $props();

  let context = menuContext.get();

  let optionItemProps = menuOptionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemIndicatorProps(optionItemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
