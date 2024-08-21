<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/select';
  import type {Snippet} from 'svelte';

  export interface SelectItemProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setSelectItemContext, useSelectContext} from './context.svelte.js';

  let {item, persistFocus, children, ...props}: SelectItemProps = $props();

  let context = useSelectContext();

  let state = $derived(
    context.getItemState({
      item,
      persistFocus,
    }),
  );

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        item,
        persistFocus,
      }),
    ),
  );

  setSelectItemContext({
    item,
    persistFocus,
  });
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
