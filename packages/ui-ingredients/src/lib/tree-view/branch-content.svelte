<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TreeViewBranchContentProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewBranchPropsContext, treeViewContext} from './context.svelte.js';

  let {children, ...props}: TreeViewBranchContentProps = $props();

  let treeView = treeViewContext.get();
  let branchProps = treeViewBranchPropsContext.get();

  let attrs = $derived(mergeProps(props, treeView.getBranchContentProps(branchProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
