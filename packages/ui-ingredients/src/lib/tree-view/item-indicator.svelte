<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TreeViewItemIndicatorProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {treeViewContext, treeViewItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TreeViewItemIndicatorProps = $props();

  let treeView = treeViewContext.get();
  let itemProps = treeViewItemPropsContext.get();

  let attrs = $derived(mergeProps(props, treeView.getItemIndicatorProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
