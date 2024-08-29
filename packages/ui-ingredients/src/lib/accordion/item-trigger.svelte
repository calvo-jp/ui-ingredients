<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface AccordionItemTriggerProps extends HtmlProps<'button'> {
    asChild?: AsChild<HtmlProps<'button'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {accordionContext, accordionItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: AccordionItemTriggerProps = $props();

  let accordion = accordionContext.get();
  let itemProps = accordionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, accordion.getItemTriggerProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
