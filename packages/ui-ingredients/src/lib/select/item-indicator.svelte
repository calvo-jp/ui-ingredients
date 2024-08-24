<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemIndicatorProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {children, ...props}: SelectItemIndicatorProps = $props();

  let context = selectContext.get();

  let itemProps = selectItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemIndicatorProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
