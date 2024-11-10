<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TreeViewBranchIndentGuideProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getTreeViewContext,
    getTreeViewNodePropsContext,
  } from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewBranchIndentGuideProps = $props();

  let treeView = getTreeViewContext();
  let nodeProps = getTreeViewNodePropsContext();
  let mergedProps = $derived(
    mergeProps(treeView.getBranchIndentGuideProps(nodeProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
