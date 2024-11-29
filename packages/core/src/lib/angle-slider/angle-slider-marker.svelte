<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {MarkerProps} from '@zag-js/angle-slider';

  export interface AngleSliderMarkerProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, MarkerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
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
