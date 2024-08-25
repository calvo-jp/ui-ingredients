<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface AccordionItemTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {accordionContext, accordionItemPropsContext} from './context.svelte.js';

  let {children, ...props}: AccordionItemTriggerProps = $props();

  let accordion = accordionContext.get();
  let itemProps = accordionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, accordion.getItemTriggerProps(itemProps)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
