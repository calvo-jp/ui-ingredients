<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TreeViewLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getTreeViewContext} from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewLabelProps = $props();

  let treeView = getTreeViewContext();
  let mergedProps = $derived(mergeProps(treeView.getLabelProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
