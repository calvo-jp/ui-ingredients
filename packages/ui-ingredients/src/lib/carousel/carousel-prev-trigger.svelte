<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CarouselPrevTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCarouselContext} from './carousel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CarouselPrevTriggerProps = $props();

  let carousel = getCarouselContext();

  let mergedProps = $derived(mergeProps(carousel.getPrevTriggerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
