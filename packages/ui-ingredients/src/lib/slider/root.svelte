<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateSliderProps,
    CreateSliderReturn,
  } from './create-slider.svelte.js';

  export interface SliderProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateSliderProps> {
    asChild?: AsChild<CreateSliderReturn>;
    children?: Snippet<[CreateSliderReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setSliderContext} from './context.svelte.js';
  import {createSlider} from './create-slider.svelte.js';

  let {asChild, children, ...props}: SliderProps = $props();

  let [sliderProps, otherProps] = $derived(
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

  let mergedProps = $derived(mergeProps(otherProps, slider.getRootProps()));

  setSliderContext(slider);
</script>

{#if asChild}
  {@render asChild(mergedProps, slider)}
{:else}
  <div {...mergedProps}>
    {@render children?.(slider)}
  </div>
{/if}
