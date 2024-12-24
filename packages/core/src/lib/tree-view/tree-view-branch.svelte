<script lang="ts" module>
  import type {NodeProps, NodeState} from '@zag-js/tree-view';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface TreeViewBranchProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, NodeState>,
      NodeProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {
    getTreeViewContext,
    setTreeViewNodePropsContext,
  } from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewBranchProps = $props();

  let treeView = getTreeViewContext();

  let [nodeProps, localProps] = $derived(
    createSplitProps<NodeProps>(['node', 'indexPath'])(props),
  );

  let nodeState = $derived(treeView.getNodeState(nodeProps));
  let mergedProps = $derived(
    mergeProps(treeView.getBranchProps(nodeProps), localProps),
  );

  setTreeViewNodePropsContext(() => nodeProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, nodeState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(nodeState)}
  </div>
{/if}
