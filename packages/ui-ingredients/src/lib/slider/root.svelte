<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSliderProps, CreateSliderReturn} from './create-slider.svelte.js';

  export interface SliderProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateSliderProps> {
    asChild?: AsChild<GenericHtmlProps, CreateSliderReturn>;
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
    asChild,
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

{#if asChild}
  {@render asChild(attrs, slider)}
{:else}
  <div {...attrs}>
    {@render children?.(slider)}
  </div>
{/if}
