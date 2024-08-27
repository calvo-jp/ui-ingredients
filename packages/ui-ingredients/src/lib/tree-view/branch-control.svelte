<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TreeViewBranchControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewBranchPropsContext, treeViewContext} from './context.svelte.js';

  let {children, ...props}: TreeViewBranchControlProps = $props();

  let treeView = treeViewContext.get();
  let branchProps = treeViewBranchPropsContext.get();

  let attrs = $derived(mergeProps(props, treeView.getBranchControlProps(branchProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
