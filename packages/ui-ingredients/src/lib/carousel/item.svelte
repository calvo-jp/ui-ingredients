<script lang="ts" context="module">
  import type {Assign, HtmlIngredientsProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/carousel';
  import type {Snippet} from 'svelte';

  export interface CarouselItemProps
    extends Assign<
      Omit<HtmlIngredientsProps<'button'>, 'children'>,
      ItemProps
    > {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCarouselContext} from './context.svelte.js';

  let {index, children, ...props}: CarouselItemProps = $props();

  let context = useCarouselContext();

  let state = $derived(context.getItemState({index}));

  let attrs = $derived(mergeProps(props, context.getItemProps({index})));
</script>

<button type="button" {...attrs}>
  {@render children?.(state)}
</button>
