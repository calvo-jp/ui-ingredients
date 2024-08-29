<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface PopoverTitleProps extends HTMLProps<'h2'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {popoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverTitleProps = $props();

  let popover = popoverContext.get();

  let attrs = $derived(mergeProps(props, popover.getTitleProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <h2 {...attrs}>
    {@render children?.()}
  </h2>
{/if}
