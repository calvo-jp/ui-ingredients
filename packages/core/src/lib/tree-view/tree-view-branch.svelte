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
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {setCollapsibleContext} from '../collapsible/collapsible-context.svelte.js';
  import {createCollapsible} from '../collapsible/create-collapsible.svelte.js';
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
  let branchContentProps = $derived(treeView.getBranchContentProps(nodeProps));
  let collapbsible = createCollapsible(
    reflect(() => ({
      ids: {content: branchContentProps.id},
      open: nodeState.expanded,
    })),
  );

  let mergedProps = $derived(
    mergeProps(
      collapbsible.getRootProps(),
      treeView.getBranchProps(nodeProps),
      localProps,
    ),
  );

  setCollapsibleContext(collapbsible);
  setTreeViewNodePropsContext(() => nodeProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, nodeState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(nodeState)}
  </div>
{/if}
