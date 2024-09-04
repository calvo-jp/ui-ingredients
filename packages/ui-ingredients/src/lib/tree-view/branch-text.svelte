<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TreeViewBranchTextProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getTreeViewBranchPropsContext,
    getTreeViewContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewBranchTextProps = $props();

  let treeView = getTreeViewContext();

  let branchProps = getTreeViewBranchPropsContext();

  let mergedProps = $derived(
    mergeProps(props, treeView.getBranchTextProps(branchProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
