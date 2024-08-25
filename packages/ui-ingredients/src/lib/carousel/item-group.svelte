<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface CarouselItemGroupProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {carouselContext} from './context.svelte.js';

  let {children, ...props}: CarouselItemGroupProps = $props();

  let carousel = carouselContext.get();

  let attrs = $derived(mergeProps(props, carousel.getItemGroupProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
