<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TreeViewBranchTriggerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getTreeViewContext,
    getTreeViewNodePropsContext,
  } from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewBranchTriggerProps = $props();

  let treeView = getTreeViewContext();
  let nodeProps = getTreeViewNodePropsContext();
  let mergedProps = $derived(
    mergeProps(treeView.getBranchTriggerProps(nodeProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
