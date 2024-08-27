<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface AccordionItemContentProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {accordionContext, accordionItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: AccordionItemContentProps = $props();

  let accordion = accordionContext.get();
  let itemProps = accordionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, accordion.getItemContentProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
