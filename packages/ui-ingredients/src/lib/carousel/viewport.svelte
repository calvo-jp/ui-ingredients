<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface CarouselViewportProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {carouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselViewportProps = $props();

  let carousel = carouselContext.get();

  let attrs = $derived(mergeProps(props, carousel.getViewportProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
