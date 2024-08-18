<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface AccordionItemTriggerProps extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useAccordionContext, useAccordionItemContext} from './context.svelte.js';

  let {children, ...props}: AccordionItemTriggerProps = $props();

  let context = useAccordionContext();
  let itemContext = useAccordionItemContext();

  let attrs = $derived(mergeProps(props, context.api.getItemTriggerProps(itemContext)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
