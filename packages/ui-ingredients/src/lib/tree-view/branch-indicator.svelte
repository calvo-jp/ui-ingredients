<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TreeViewBranchIndicatorProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {treeViewBranchPropsContext, treeViewContext} from './context.svelte.js';

  let {children, ...props}: TreeViewBranchIndicatorProps = $props();

  let treeView = treeViewContext.get();
  let branchProps = treeViewBranchPropsContext.get();

  let attrs = $derived(mergeProps(props, treeView.getBranchIndicatorProps(branchProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
