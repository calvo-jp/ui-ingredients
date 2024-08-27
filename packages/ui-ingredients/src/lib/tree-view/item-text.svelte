<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TreeViewItemTextProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewContext, treeViewItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TreeViewItemTextProps = $props();

  let treeView = treeViewContext.get();
  let itemProps = treeViewItemPropsContext.get();

  let attrs = $derived(mergeProps(props, treeView.getItemTextProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
