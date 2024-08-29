<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface PopoverDescriptionProps extends HtmlProps<'p'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {popoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverDescriptionProps = $props();

  let popover = popoverContext.get();

  let attrs = $derived(mergeProps(props, popover.getDescriptionProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <p {...attrs}>
    {@render children?.()}
  </p>
{/if}
