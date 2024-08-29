<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface CarouselNextTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {carouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselNextTriggerProps = $props();

  let carousel = carouselContext.get();

  let attrs = $derived(mergeProps(props, carousel.getNextTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
