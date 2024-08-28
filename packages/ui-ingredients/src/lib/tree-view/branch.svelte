<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {BranchProps, BranchState} from '@zag-js/tree-view';
  import type {Snippet} from 'svelte';

  export interface TreeViewBranchProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, BranchProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>, state: BranchState]>;
    children?: Snippet<[state: BranchState]>;
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

  let attrs = $derived(mergeProps(props, treeView.getBranchProps(branchProps)));
  let state = $derived(treeView.getBranchState(branchProps));

  treeViewBranchPropsContext.set(() => branchProps);
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <div {...attrs}>
    {@render children?.(state)}
  </div>
{/if}
