<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {BranchProps, BranchState} from '@zag-js/tree-view';

  export interface TreeViewBranchProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, BranchState>,
      Omit<BranchProps, 'depth'>
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getTreeViewContext,
    getTreeViewTreePropsContext,
    setTreeViewBranchPropsContext,
  } from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewBranchProps = $props();

  let treeView = getTreeViewContext();
  let treeViewProps = getTreeViewTreePropsContext();

  let [branchPartialProps, localProps] = $derived(
    createSplitProps<Omit<BranchProps, 'depth'>>(['value', 'disabled'])(props),
  );

  let branchProps = reflect(() => ({
    ...branchPartialProps,
    ...treeViewProps,
  }));

  let branchState = $derived(treeView.getBranchState(branchProps));

  let mergedProps = $derived(
    mergeProps(treeView.getBranchProps(branchProps), localProps),
  );

  setTreeViewBranchPropsContext(() => branchProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, branchState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(branchState)}
  </div>
{/if}
