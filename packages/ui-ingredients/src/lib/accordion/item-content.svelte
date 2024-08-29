<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface AccordionItemContentProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {accordionContext, accordionItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: AccordionItemContentProps = $props();

  let accordion = accordionContext.get();
  let itemProps = accordionItemPropsContext.get();

  let mergedProps = $derived(mergeProps(props, accordion.getItemContentProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
