<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TreeViewTreeProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTreeViewContext} from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewTreeProps = $props();

  let treeView = getTreeViewContext();
  let mergedProps = $derived(mergeProps(treeView.getTreeProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
