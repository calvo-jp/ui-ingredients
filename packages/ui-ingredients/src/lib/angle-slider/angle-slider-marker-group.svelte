<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface AngleSliderMarkerGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getAngleSliderContext} from './angle-slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AngleSliderMarkerGroupProps = $props();

  let angleSlider = getAngleSliderContext();
  let mergedProps = $derived(
    mergeProps(angleSlider.getMarkerGroupProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
