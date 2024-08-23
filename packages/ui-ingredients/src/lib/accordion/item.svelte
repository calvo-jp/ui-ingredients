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
    getAccordionContext,
    setAccordionItemPropsContext,
  } from './context.svelte.js';

  let {value, disabled, children, ...props}: AccordionItemProps = $props();

  let context = getAccordionContext();

  let itemProps = setAccordionItemPropsContext(() => ({
    value,
    disabled,
  }));

  let state = $derived(context.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, context.getItemProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
