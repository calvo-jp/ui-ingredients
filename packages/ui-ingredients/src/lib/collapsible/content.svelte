<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface CollapsibleContentProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {collapsibleContext} from './context.svelte.js';

  let {asChild, children, ...props}: CollapsibleContentProps = $props();

  let collapsible = collapsibleContext.get();

  let attrs = $derived(mergeProps(props, collapsible.getContentProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
