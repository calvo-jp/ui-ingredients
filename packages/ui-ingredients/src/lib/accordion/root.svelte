<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {
    CreateAccordionContextProps,
    CreateAccordionContextReturn,
  } from './context.svelte.js';

  export interface AccordionProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateAccordionContextProps>
    > {
    children?: Snippet<[context: CreateAccordionContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createAccordionContext, setAccordionContext} from './context.svelte.js';

  let {
    id = uuid(),
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

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setAccordionContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
