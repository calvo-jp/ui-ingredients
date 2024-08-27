<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TreeViewItemIndicatorProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewContext, treeViewItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TreeViewItemIndicatorProps = $props();

  let treeView = treeViewContext.get();
  let itemProps = treeViewItemPropsContext.get();

  let attrs = $derived(mergeProps(props, treeView.getItemIndicatorProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
