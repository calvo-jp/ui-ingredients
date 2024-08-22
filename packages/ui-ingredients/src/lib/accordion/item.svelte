<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/accordion';
  import type {Snippet} from 'svelte';

  export interface AccordionItemProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    setAccordionItemPropsContext,
    useAccordionContext,
  } from './context.svelte.js';

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

  setAccordionItemPropsContext({
    value,
    disabled,
  });
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
