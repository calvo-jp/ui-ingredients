<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectItemIndicatorProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {children, ...props}: SelectItemIndicatorProps = $props();

  let select = selectContext.get();
  let itemProps = selectItemPropsContext.get();

  let attrs = $derived(mergeProps(props, select.getItemIndicatorProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
