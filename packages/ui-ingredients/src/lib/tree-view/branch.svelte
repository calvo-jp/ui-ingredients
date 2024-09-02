<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {BranchProps, BranchState} from '@zag-js/tree-view';
  import type {Snippet} from 'svelte';

  export interface TreeViewBranchProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, BranchProps> {
    asChild?: AsChild<BranchState>;
    children?: Snippet<[BranchState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getTreeViewContext,
    setTreeViewBranchPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewBranchProps = $props();

  let treeView = getTreeViewContext();

  let [branchProps, otherProps] = $derived(
    createSplitProps<BranchProps>(['depth', 'value', 'disabled'])(props),
  );

  let branchState = $derived(treeView.getBranchState(branchProps));

  let mergedProps = $derived(
    mergeProps(otherProps, treeView.getBranchProps(branchProps)),
  );

  setTreeViewBranchPropsContext(() => branchProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, branchState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(branchState)}
  </div>
{/if}
