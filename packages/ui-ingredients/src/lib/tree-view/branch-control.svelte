<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TreeViewBranchControlProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewBranchPropsContext, treeViewContext} from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewBranchControlProps = $props();

  let treeView = treeViewContext.get();
  let branchProps = treeViewBranchPropsContext.get();

  let attrs = $derived(mergeProps(props, treeView.getBranchControlProps(branchProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
