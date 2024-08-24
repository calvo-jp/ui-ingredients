<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/select';
  import type {Snippet} from 'svelte';

  export interface SelectItemProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {item, persistFocus, children, ...props}: SelectItemProps = $props();

  let context = selectContext.get();

  let itemProps = $derived({
    item,
    persistFocus,
  });

  let state = $derived(context.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, context.getItemProps(itemProps)));

  selectItemPropsContext.set(() => itemProps);
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
