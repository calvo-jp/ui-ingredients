<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface AccordionItemContentProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {accordionContext, accordionItemPropsContext} from './context.svelte.js';

  let {children, ...props}: AccordionItemContentProps = $props();

  let context = accordionContext.get();

  let itemProps = accordionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemContentProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
