<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/carousel';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface CarouselIndicatorProps
    extends Assign<SvelteHTMLElements['button'], IndicatorProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCarouselContext} from './context.svelte.js';

  let {index, readOnly, children, ...props}: CarouselIndicatorProps = $props();

  let context = useCarouselContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.api.getIndicatorProps({
        index,
        readOnly,
      }),
    ),
  );
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
