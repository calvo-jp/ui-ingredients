<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectItemIndicatorProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {children, ...props}: SelectItemIndicatorProps = $props();

  let select = selectContext.get();
  let itemProps = selectItemPropsContext.get();

  let attrs = $derived(mergeProps(props, select.getItemIndicatorProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
