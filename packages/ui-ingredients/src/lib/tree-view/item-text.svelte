<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TreeViewItemTextProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getTreeViewContext,
    getTreeViewItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewItemTextProps = $props();

  let treeView = getTreeViewContext();

  let itemProps = getTreeViewItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, treeView.getItemTextProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
