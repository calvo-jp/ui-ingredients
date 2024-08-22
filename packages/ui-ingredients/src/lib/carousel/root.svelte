<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateCarouselContextProps,
    CreateCarouselContextReturn,
  } from './context.svelte.js';

  export interface CarouselProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateCarouselContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateCarouselContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createCarouselContext, setCarouselContext} from './context.svelte.js';

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
  let environmentContext = useEnvironmentContext();

  let context = createCarouselContext({
    id: id ?? createUniqueId(),
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

  setCarouselContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
