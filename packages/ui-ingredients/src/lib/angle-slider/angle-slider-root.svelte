<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import {
    type CreateAngleSliderProps,
    type CreateAngleSliderReturn,
  } from './create-angle-slider.svelte.js';

  export interface AngleSliderProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateAngleSliderReturn>,
      CreateAngleSliderProps
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {setAngleSliderContext} from './angle-slider-context.svelte.js';
  import {createAngleSlider} from './create-angle-slider.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AngleSliderProps = $props();

  let [createAngleSliderProps, localProps] = $derived(
    createSplitProps<CreateAngleSliderProps>([
      'defaultValue',
      'disabled',
      'id',
      'ids',
      'invalid',
      'name',
      'onValueChange',
      'onValueChangeEnd',
      'readOnly',
      'step',
      'value',
    ])(props),
  );

  let angleSlider = createAngleSlider(reflect(() => createAngleSliderProps));
  let mergedProps = $derived(
    mergeProps(angleSlider.getRootProps(), localProps),
  );

  setAngleSliderContext(angleSlider);
</script>

{#if asChild}
  {@render asChild(mergedProps, angleSlider)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(angleSlider)}
  </div>
{/if}
