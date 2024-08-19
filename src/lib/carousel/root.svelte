<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateCarouselContextProps, CreateCarouselContextReturn} from './context.svelte.js';

  interface BaseProps extends OptionalId<CreateCarouselContextProps> {
    children?: Snippet<[context: CreateCarouselContextReturn]>;
  }

  export interface CarouselProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateCarouselContextProps>
    > {
    children?: Snippet<[context: CreateCarouselContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createCarouselContext, setCarouselContext} from './context.svelte.js';

  let {
    id = uuid(),
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

  let context = createCarouselContext({
    id,
    ids,
    dir,
    loop,
    align,
    index: $state.snapshot(index),
    spacing,
    orientation,
    slidesPerView,
    onIndexChange,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setCarouselContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
