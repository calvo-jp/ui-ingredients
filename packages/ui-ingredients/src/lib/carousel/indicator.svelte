<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/carousel';

  export interface CarouselIndicatorProps extends Assign<HTMLProps<'button'>, IndicatorProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {carouselContext} from './context.svelte.js';

  let {index, readOnly, asChild, children, ...props}: CarouselIndicatorProps = $props();

  let carousel = carouselContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      carousel.getIndicatorProps({
        index,
        readOnly,
      }),
    ),
  );
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
