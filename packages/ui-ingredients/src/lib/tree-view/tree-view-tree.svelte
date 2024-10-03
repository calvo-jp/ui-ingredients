<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TreeViewTreeProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {
    depth?: number;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getTreeViewContext,
    setTreeViewTreePropsContext,
  } from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    depth = 1,
    asChild,
    children,
    ...props
  }: TreeViewTreeProps = $props();

  let treeView = getTreeViewContext();

  let mergedProps = $derived(mergeProps(treeView.getTreeProps(), props));

  setTreeViewTreePropsContext({depth});
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
