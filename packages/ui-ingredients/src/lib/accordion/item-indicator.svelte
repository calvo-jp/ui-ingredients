<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface AccordionIndicatorProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {
    accordionContext,
    accordionItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: AccordionIndicatorProps = $props();

  let accordion = accordionContext.get();
  let itemProps = accordionItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, accordion.getItemIndicatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
