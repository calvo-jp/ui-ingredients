<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/carousel';
  import type {Snippet} from 'svelte';

  export interface CarouselItemProps extends Assign<Omit<HTMLProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
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
  <div {...attrs}>
    {@render children?.(state)}
  </div>
{/if}
