<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TreeViewBranchContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getTreeViewBranchPropsContext,
    getTreeViewContext,
  } from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewBranchContentProps = $props();

  let treeView = getTreeViewContext();
  let branchProps = getTreeViewBranchPropsContext();
  let mergedProps = $derived(
    mergeProps(treeView.getBranchContentProps(branchProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
