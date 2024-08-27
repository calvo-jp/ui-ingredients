<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSliderProps, CreateSliderReturn} from './create-slider.svelte.js';

  export interface SliderProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateSliderProps> {
    children?: Snippet<[slider: CreateSliderReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';
  import {createSlider} from './create-slider.svelte.js';

  let {
    id,
    ids,
    max,
    min,
    step,
    form,
    name,
    value,
    origin,
    invalid,
    readOnly,
    disabled,
    orientation,
    thumbAlignment,
    thumbSize,
    minStepsBetweenThumbs,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    onFocusChange,
    onValueChange,
    onValueChangeEnd,
    getAriaValueText,
    children,
    ...props
  }: SliderProps = $props();

  let slider = createSlider({
    id,
    ids,
    max,
    min,
    step,
    form,
    name,
    value: $state.snapshot(value),
    origin,
    invalid,
    readOnly,
    disabled,
    orientation,
    thumbAlignment,
    thumbSize,
    minStepsBetweenThumbs,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    onFocusChange,
    onValueChange,
    onValueChangeEnd,
    getAriaValueText,
  });

  let attrs = $derived(mergeProps(props, slider.getRootProps()));

  sliderContext.set(slider);
</script>

<div {...attrs}>
  {@render children?.(slider)}
</div>
