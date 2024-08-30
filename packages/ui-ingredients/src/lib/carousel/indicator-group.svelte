<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface CarouselIndicatorGroupProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {carouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselIndicatorGroupProps = $props();

  let carousel = carouselContext.get();

  let mergedProps = $derived(
    mergeProps(props, carousel.getIndicatorGroupProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
