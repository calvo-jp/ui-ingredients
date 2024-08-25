<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface CarouselPrevTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {carouselContext} from './context.svelte.js';

  let {children, ...props}: CarouselPrevTriggerProps = $props();

  let carousel = carouselContext.get();

  let attrs = $derived(mergeProps(props, carousel.getPrevTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
