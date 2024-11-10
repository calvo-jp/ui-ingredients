<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {NodeProps} from '@zag-js/tree-view';

  export interface TreeViewBranchProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, NodeProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
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

  let mergedProps = $derived(
    mergeProps(treeView.getBranchProps(nodeProps), localProps),
  );

  setTreeViewNodePropsContext(() => nodeProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
