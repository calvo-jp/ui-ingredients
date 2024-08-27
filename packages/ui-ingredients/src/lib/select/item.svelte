<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/select';
  import type {Snippet} from 'svelte';

  export interface SelectItemProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {item, persistFocus, children, ...props}: SelectItemProps = $props();

  let select = selectContext.get();
  let itemProps = $derived({
    item,
    persistFocus,
  });

  let state = $derived(select.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, select.getItemProps(itemProps)));

  selectItemPropsContext.set(() => itemProps);
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
