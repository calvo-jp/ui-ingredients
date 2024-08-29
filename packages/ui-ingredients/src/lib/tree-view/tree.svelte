<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TreeViewTreeProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewContext} from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewTreeProps = $props();

  let treeView = treeViewContext.get();

  let attrs = $derived(mergeProps(props, treeView.getTreeProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
