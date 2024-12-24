<script lang="ts" module>
  import type {MarkerProps} from '@zag-js/angle-slider';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface AngleSliderMarkerProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, MarkerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {getAngleSliderContext} from './angle-slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AngleSliderMarkerProps = $props();

  let [markerProps, localProps] = $derived(
    createSplitProps<MarkerProps>(['value'])(props),
  );

  let angleSlider = getAngleSliderContext();

  let mergedProps = $derived(
    mergeProps(angleSlider.getMarkerProps(markerProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
