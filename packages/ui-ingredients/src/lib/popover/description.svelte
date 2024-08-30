<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface PopoverDescriptionProps extends HTMLProps<'p'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {popoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverDescriptionProps = $props();

  let popover = popoverContext.get();

  let mergedProps = $derived(mergeProps(props, popover.getDescriptionProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p {...mergedProps}>
    {@render children?.()}
  </p>
{/if}
