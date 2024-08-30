<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TreeViewTreeProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {treeViewContext} from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewTreeProps = $props();

  let treeView = treeViewContext.get();

  let mergedProps = $derived(mergeProps(props, treeView.getTreeProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
