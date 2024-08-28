<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface TreeViewBranchTextProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewBranchPropsContext, treeViewContext} from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewBranchTextProps = $props();

  let treeView = treeViewContext.get();
  let branchProps = treeViewBranchPropsContext.get();

  let attrs = $derived(mergeProps(props, treeView.getBranchTextProps(branchProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
