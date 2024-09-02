<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateCarouselProps,
    CreateCarouselReturn,
  } from './create-carousel.svelte.js';

  export interface CarouselProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateCarouselProps> {
    asChild?: AsChild<CreateCarouselReturn>;
    children?: Snippet<[CreateCarouselReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setCarouselContext} from './context.svelte.js';
  import {createCarousel} from './create-carousel.svelte.js';

  let {asChild, children, ...props}: CarouselProps = $props();

  let [carouselProps, otherProps] = $derived(
    createSplitProps<CreateCarouselProps>([
      'id',
      'ids',
      'loop',
      'align',
      'index',
      'spacing',
      'orientation',
      'slidesPerView',
      'onIndexChange',
    ])(props),
  );

  let carousel = createCarousel(reflect(() => carouselProps));

  let mergedProps = $derived(mergeProps(otherProps, carousel.getRootProps()));

  setCarouselContext(carousel);
</script>

{#if asChild}
  {@render asChild(mergedProps, carousel)}
{:else}
  <div {...mergedProps}>
    {@render children?.(carousel)}
  </div>
{/if}
