<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/carousel';

  export interface CarouselIndicatorProps extends Assign<HtmlProps<'button'>, IndicatorProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {carouselContext} from './context.svelte.js';

  let {index, readOnly, children, ...props}: CarouselIndicatorProps = $props();

  let context = carouselContext.get();

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
