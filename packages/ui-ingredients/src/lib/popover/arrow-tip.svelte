<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface PopoverArrowTipProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {popoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverArrowTipProps = $props();

  let popover = popoverContext.get();

  let attrs = $derived(mergeProps(props, popover.getArrowTipProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
