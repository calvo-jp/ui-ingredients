<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface CarouselNextTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getCarouselContext} from './carousel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CarouselNextTriggerProps = $props();

  let carousel = getCarouselContext();
  let mergedProps = $derived(mergeProps(carousel.getNextTriggerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
