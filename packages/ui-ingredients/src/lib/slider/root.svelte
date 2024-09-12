<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateSliderProps,
    CreateSliderReturn,
  } from './create-slider.svelte.js';

  export interface SliderProps
    extends Assign<
      HtmlIngredientProps<'div', CreateSliderReturn>,
      CreateSliderProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setSliderContext} from './context.svelte.js';
  import {createSlider} from './create-slider.svelte.js';

  let {asChild, children, ...props}: SliderProps = $props();

  let [sliderProps, localProps] = $derived(
    createSplitProps<CreateSliderProps>([
      'id',
      'ids',
      'max',
      'min',
      'step',
      'form',
      'name',
      'value',
      'origin',
      'invalid',
      'readOnly',
      'disabled',
      'orientation',
      'thumbAlignment',
      'thumbSize',
      'minStepsBetweenThumbs',
      'onFocusChange',
      'onValueChange',
      'onValueChangeEnd',
      'getAriaValueText',
      'aria-label',
      'aria-labelledby',
    ])(props),
  );

  let slider = createSlider(reflect(() => sliderProps));

  let mergedProps = $derived(mergeProps(localProps, slider.getRootProps()));

  setSliderContext(slider);
</script>

{#if asChild}
  {@render asChild(mergedProps, slider)}
{:else}
  <div {...mergedProps}>
    {@render children?.(slider)}
  </div>
{/if}
