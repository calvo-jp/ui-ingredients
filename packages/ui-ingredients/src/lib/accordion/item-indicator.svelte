<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface AccordionIndicatorProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {accordionContext, accordionItemPropsContext} from './context.svelte.js';

  let {children, ...props}: AccordionIndicatorProps = $props();

  let accordion = accordionContext.get();
  let itemProps = accordionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, accordion.getItemIndicatorProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
