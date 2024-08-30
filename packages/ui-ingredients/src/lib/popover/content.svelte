<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface PopoverContentProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {popoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverContentProps = $props();

  let popover = popoverContext.get();

  let mergedProps = $derived(mergeProps(props, popover.getContentProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
