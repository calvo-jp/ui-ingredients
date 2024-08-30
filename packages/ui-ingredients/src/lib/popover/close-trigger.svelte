<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface PopoverCloseTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {popoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverCloseTriggerProps = $props();

  let popover = popoverContext.get();

  let mergedProps = $derived(mergeProps(props, popover.getCloseTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
