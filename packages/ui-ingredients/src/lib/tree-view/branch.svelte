<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {BranchProps, BranchState} from '@zag-js/tree-view';

  export interface TreeViewBranchProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, BranchState>,
      BranchProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getTreeViewContext,
    setTreeViewBranchPropsContext,
  } from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TreeViewBranchProps = $props();

  let treeView = getTreeViewContext();

  let [branchProps, localProps] = $derived(
    createSplitProps<BranchProps>(['depth', 'value', 'disabled'])(props),
  );

  let branchState = $derived(treeView.getBranchState(branchProps));

  let mergedProps = $derived(
    mergeProps(localProps, treeView.getBranchProps(branchProps)),
  );

  setTreeViewBranchPropsContext(() => branchProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, branchState)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(branchState)}
  </div>
{/if}
