<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {BranchProps, BranchState} from '@zag-js/tree-view';
  import type {Snippet} from 'svelte';

  export interface TreeViewBranchProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, BranchProps> {
    children?: Snippet<[state: BranchState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {treeViewBranchPropsContext, treeViewContext} from './context.svelte.js';

  let {
    /**/
    depth,
    value,
    disabled,
    children,
    ...props
  }: TreeViewBranchProps = $props();

  let treeView = treeViewContext.get();
  let branchProps: BranchProps = $derived({
    depth,
    value,
    disabled,
  });

  let attrs = $derived(mergeProps(props, treeView.getBranchProps(branchProps)));
  let state = $derived(treeView.getBranchState(branchProps));

  treeViewBranchPropsContext.set(() => branchProps);
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
