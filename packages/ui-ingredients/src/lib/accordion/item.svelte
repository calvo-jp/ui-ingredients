<script lang="ts" module>
  import type {AsChild, Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/accordion';
  import type {Snippet} from 'svelte';

  export interface AccordionItemProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild;
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {accordionContext, accordionItemPropsContext} from './context.svelte.js';

  let {value, disabled, asChild, children, ...props}: AccordionItemProps = $props();

  let accordion = accordionContext.get();
  let itemProps = $derived({
    value,
    disabled,
  });

  let state = $derived(accordion.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, accordion.getItemProps(itemProps)));

  accordionItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.(state)}
  </div>
{/if}
