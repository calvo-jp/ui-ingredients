<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSliderProps, CreateSliderReturn} from './create-slider.svelte.js';

  export interface SliderProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, Omit<CreateSliderProps, 'id'>> {
    children?: Snippet<[api: CreateSliderReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {sliderContext} from './context.svelte.js';
  import {createSlider} from './create-slider.svelte.js';

  let {
    id,
    ids,
    dir,
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
    getRootNode,
    children,
    ...props
  }: SliderProps = $props();

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createSlider({
    id: id ?? uid,
    ids,
    dir: dir ?? localeContext?.dir,
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
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  sliderContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
