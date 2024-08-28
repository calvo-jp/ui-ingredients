<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface TreeViewItemTextProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
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
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
