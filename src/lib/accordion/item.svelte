<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/accordion';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface AccordionItemProps extends Assign<SvelteHTMLElements['div'], ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createAccordionItemContext, useAccordionContext} from './context.svelte.js';

  let {value, disabled, children, ...props}: AccordionItemProps = $props();

  let context = useAccordionContext();
  let itemContext = createAccordionItemContext({
    value,
    disabled,
  });

  let attrs = $derived(mergeProps(props, context.api.getItemProps(itemContext)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
