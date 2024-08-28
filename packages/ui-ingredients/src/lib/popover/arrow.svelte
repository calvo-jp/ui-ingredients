<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface PopoverArrowProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
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
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
