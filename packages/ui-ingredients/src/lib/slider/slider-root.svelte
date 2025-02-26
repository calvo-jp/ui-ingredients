<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateSliderProps,
    CreateSliderReturn,
  } from './create-slider.svelte.js';

  export interface SliderProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateSliderReturn>,
      CreateSliderProps
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createSlider} from './create-slider.svelte.js';
  import {setSliderContext} from './slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SliderProps = $props();

  let [createSliderProps, localProps] = $derived(
    createSplitProps<CreateSliderProps>([
      'aria-label',
      'aria-labelledby',
      'defaultValue',
      'disabled',
      'form',
      'getAriaValueText',
      'id',
      'ids',
      'invalid',
      'max',
      'min',
      'minStepsBetweenThumbs',
      'name',
      'onFocusChange',
      'onValueChange',
      'onValueChangeEnd',
      'orientation',
      'origin',
      'readOnly',
      'step',
      'thumbAlignment',
      'thumbSize',
      'value',
    ])(props),
  );

  let slider = createSlider(reflect(() => createSliderProps));
  let mergedProps = $derived(mergeProps(slider.getRootProps(), localProps));

  setSliderContext(slider);
</script>

{#if asChild}
  {@render asChild(mergedProps, slider)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(slider)}
  </div>
{/if}
