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
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {treeViewBranchPropsContext, treeViewContext} from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewBranchProps = $props();

  let treeView = treeViewContext.get();

  let [branchProps, otherProps] = $derived(
    createSplitProps<BranchProps>(['depth', 'value', 'disabled'])(props),
  );

  let itemState = $derived(treeView.getBranchState(branchProps));

  let mergedProps = $derived(mergeProps(otherProps, treeView.getBranchProps(branchProps)));

  treeViewBranchPropsContext.set(() => branchProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
