<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateAccordionContextProps} from './context.svelte.js';

  export interface AccordionProps
    extends Assign<SvelteHTMLElements['div'], OptionalId<CreateAccordionContextProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createAccordionContext, setAccordionContext} from './context.svelte.js';

  let {
    id = nanoid(),
    ids,
    dir,
    value,
    disabled,
    multiple,
    orientation,
    collapsible,
    onFocusChange,
    onValueChange,
    getRootNode,
    children,
    ...props
  }: AccordionProps = $props();

  let context = createAccordionContext({
    id,
    ids,
    dir,
    value: $state.snapshot(value),
    multiple,
    disabled,
    collapsible,
    orientation,
    onFocusChange,
    onValueChange,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.api.getRootProps()));

  setAccordionContext(context);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
