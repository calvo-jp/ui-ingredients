<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface AccordionItemContentProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useAccordionContext, useAccordionItemContext} from './context.svelte.js';

  let {children, ...props}: AccordionItemContentProps = $props();

  let context = useAccordionContext();
  let itemContext = useAccordionItemContext();

  let attrs = $derived(mergeProps(props, context.getItemContentProps(itemContext)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
