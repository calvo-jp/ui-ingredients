<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSliderProps, CreateSliderReturn} from './create-slider.svelte.js';

  export interface SliderProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateSliderProps> {
    asChild?: AsChild<CreateSliderReturn>;
    children?: Snippet<[CreateSliderReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';
  import {createSlider} from './create-slider.svelte.js';

  let {asChild, children, ...props}: SliderProps = $props();

  let [sliderProps, otherProps] = createSplitProps<CreateSliderProps>([
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
  ])(props);

  let slider = createSlider(sliderProps);

  let mergedProps = $derived(mergeProps(otherProps, slider.getRootProps()));

  sliderContext.set(slider);
</script>

{#if asChild}
  {@render asChild(mergedProps, slider)}
{:else}
  <div {...mergedProps}>
    {@render children?.(slider)}
  </div>
{/if}
