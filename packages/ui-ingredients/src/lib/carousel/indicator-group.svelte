<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CarouselIndicatorGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCarouselContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: CarouselIndicatorGroupProps = $props();

  let carousel = getCarouselContext();

  let mergedProps = $derived(
    mergeProps(props, carousel.getIndicatorGroupProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
