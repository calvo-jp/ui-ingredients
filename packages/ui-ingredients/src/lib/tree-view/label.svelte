<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TreeViewLabelProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {treeViewContext} from './context.svelte.js';

  let {asChild, children, ...props}: TreeViewLabelProps = $props();

  let treeView = treeViewContext.get();

  let attrs = $derived(mergeProps(props, treeView.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
