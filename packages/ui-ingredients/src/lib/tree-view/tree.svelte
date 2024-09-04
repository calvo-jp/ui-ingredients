<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TreeViewTreeProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTreeViewContext} from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewTreeProps = $props();

  let treeView = getTreeViewContext();

  let mergedProps = $derived(mergeProps(props, treeView.getTreeProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
