<script lang="ts" context="module">
  import type {Assign, WithoutChildren} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/accordion';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface AccordionItemProps
    extends Assign<WithoutChildren<SvelteHTMLElements['div']>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setAccordionItemContext, useAccordionContext} from './context.svelte.js';

  let {value, disabled, children, ...props}: AccordionItemProps = $props();

  let context = useAccordionContext();

  let state = $derived(
    context.getItemState({
      value,
      disabled,
    }),
  );

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        value,
        disabled,
      }),
    ),
  );

  setAccordionItemContext({
    value,
    disabled,
  });
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
