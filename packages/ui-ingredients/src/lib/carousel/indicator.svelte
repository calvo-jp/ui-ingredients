<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/carousel';
  import type {Snippet} from 'svelte';

  export interface CarouselIndicatorProps extends Assign<HtmlProps<'button'>, IndicatorProps> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>]>;
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
