<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface PopoverArrowProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {popoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverArrowProps = $props();

  let popover = popoverContext.get();

  let attrs = $derived(mergeProps(props, popover.getArrowProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
