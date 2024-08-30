<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TreeViewItemIndicatorProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {treeViewContext, treeViewItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewItemIndicatorProps = $props();

  let treeView = treeViewContext.get();

  let itemProps = treeViewItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, treeView.getItemIndicatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
