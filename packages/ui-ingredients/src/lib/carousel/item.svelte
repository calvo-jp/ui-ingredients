<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/carousel';
  import type {Snippet} from 'svelte';

  export interface CarouselItemProps
    extends Assign<Omit<HtmlProps<'button'>, 'children'>, ItemProps> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>, state: ItemState]>;
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {carouselContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: CarouselItemProps = $props();

  let carousel = carouselContext.get();

  let state = $derived(carousel.getItemState({index}));
  let attrs = $derived(mergeProps(props, carousel.getItemProps({index})));
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.(state)}
  </button>
{/if}
