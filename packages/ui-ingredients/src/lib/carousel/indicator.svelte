<script lang="ts" context="module">
  import type {Assign, HtmlIngredientsProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/carousel';

  export interface CarouselIndicatorProps
    extends Assign<HtmlIngredientsProps<'button'>, IndicatorProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCarouselContext} from './context.svelte.js';

  let {index, readOnly, children, ...props}: CarouselIndicatorProps = $props();

  let context = useCarouselContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getIndicatorProps({
        index,
        readOnly,
      }),
    ),
  );
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
