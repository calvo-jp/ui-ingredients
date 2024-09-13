<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TreeViewLabelProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTreeViewContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TreeViewLabelProps = $props();

  let treeView = getTreeViewContext();

  let mergedProps = $derived(mergeProps(props, treeView.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
