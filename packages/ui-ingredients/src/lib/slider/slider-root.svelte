<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateSliderProps,
    CreateSliderReturn,
  } from './create-slider.svelte.js';

  export interface SliderProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateSliderReturn>,
      Optional<CreateSliderProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createSlider} from './create-slider.svelte.js';
  import {setSliderContext} from './slider-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: SliderProps = $props();

  let uid = $props.id();

  let [createSliderProps, localProps] = $derived(
    createSplitProps<Omit<CreateSliderProps, 'id'>>([
      'aria-label',
      'aria-labelledby',
      'defaultValue',
      'disabled',
      'form',
      'getAriaValueText',
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
    ])(rest),
  );

  let slider = createSlider(
    reflect(() => ({...createSliderProps, id: id ?? uid})),
  );

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
