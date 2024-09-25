<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TreeViewItemIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getTreeViewContext,
    getTreeViewItemPropsContext,
  } from './tree-view-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: TreeViewItemIndicatorProps = $props();

  let treeView = getTreeViewContext();

  let itemProps = getTreeViewItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, treeView.getItemIndicatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
