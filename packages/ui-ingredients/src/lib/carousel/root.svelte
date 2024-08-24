<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateCarouselProps, CreateCarouselReturn} from './create-carousel.svelte.js';

  export interface CarouselProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, Omit<CreateCarouselProps, 'id'>> {
    children?: Snippet<[api: CreateCarouselReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {carouselContext} from './context.svelte.js';
  import {createCarousel} from './create-carousel.svelte.js';

  let {
    id,
    ids,
    dir,
    loop,
    align,
    index,
    spacing,
    orientation,
    slidesPerView,
    onIndexChange,
    getRootNode,
    children,
    ...props
  }: CarouselProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createCarousel({
    id: id ?? uid,
    ids,
    dir: dir ?? localeContext?.dir,
    loop,
    align,
    index: $state.snapshot(index),
    spacing,
    orientation,
    slidesPerView,
    onIndexChange,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  carouselContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
