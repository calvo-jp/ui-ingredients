<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface CarouselNextTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {carouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselNextTriggerProps = $props();

  let carousel = carouselContext.get();

  let mergedProps = $derived(mergeProps(props, carousel.getNextTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
