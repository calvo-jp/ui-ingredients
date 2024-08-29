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
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewBranchPropsContext, treeViewContext} from './context.svelte.js';

  let {depth, value, disabled, asChild, children, ...props}: TreeViewBranchProps = $props();

  let treeView = treeViewContext.get();
  let branchProps: BranchProps = $derived({
    depth,
    value,
    disabled,
  });

  let mergedProps = $derived(mergeProps(props, treeView.getBranchProps(branchProps)));
  let itemState = $derived(treeView.getBranchState(branchProps));

  treeViewBranchPropsContext.set(() => branchProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
