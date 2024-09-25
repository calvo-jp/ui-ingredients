<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TreeViewBranchTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getTreeViewBranchPropsContext,
    getTreeViewContext,
  } from './tree-view-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: TreeViewBranchTextProps = $props();

  let treeView = getTreeViewContext();

  let branchProps = getTreeViewBranchPropsContext();

  let mergedProps = $derived(
    mergeProps(props, treeView.getBranchTextProps(branchProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
