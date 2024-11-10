<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TreeViewBranchControlProps
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
  }: TreeViewBranchControlProps = $props();

  let treeView = getTreeViewContext();
  let nodeProps = getTreeViewNodePropsContext();
  let mergedProps = $derived(
    mergeProps(treeView.getBranchControlProps(nodeProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
