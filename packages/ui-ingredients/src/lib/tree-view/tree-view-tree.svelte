<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TreeViewTreeProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTreeViewContext} from './tree-view-context.svelte.js';

  let {this: e, asChild, children, ...props}: TreeViewTreeProps = $props();

  let treeView = getTreeViewContext();

  let mergedProps = $derived(mergeProps(props, treeView.getTreeProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
