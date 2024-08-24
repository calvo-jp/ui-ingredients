<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxItemIndicatorProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {children, ...props}: ComboboxItemIndicatorProps = $props();

  let context = comboboxContext.get();

  let itemProps = comboboxItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemIndicatorProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
