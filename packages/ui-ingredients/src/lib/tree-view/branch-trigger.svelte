<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TreeViewBranchTriggerProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    treeViewBranchPropsContext,
    treeViewContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewBranchTriggerProps = $props();

  let treeView = treeViewContext.get();

  let branchProps = treeViewBranchPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, treeView.getBranchTriggerProps(branchProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
