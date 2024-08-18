<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface AccordionIndicatorProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useAccordionContext, useAccordionItemContext} from './context.svelte.js';

  let {children, ...props}: AccordionIndicatorProps = $props();

  let context = useAccordionContext();
  let itemContext = useAccordionItemContext();

  let attrs = $derived(mergeProps(props, context.getItemIndicatorProps(itemContext)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
