<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TreeViewItemIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getTreeViewContext,
    getTreeViewNodePropsContext,
  } from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewItemIndicatorProps = $props();

  let treeView = getTreeViewContext();
  let nodeProps = getTreeViewNodePropsContext();
  let mergedProps = $derived(
    mergeProps(treeView.getItemIndicatorProps(nodeProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
