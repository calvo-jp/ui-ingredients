<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface TreeViewItemTextProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewContext, treeViewItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewItemTextProps = $props();

  let treeView = treeViewContext.get();
  let itemProps = treeViewItemPropsContext.get();

  let attrs = $derived(mergeProps(props, treeView.getItemTextProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
