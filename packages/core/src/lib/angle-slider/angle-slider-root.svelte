<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
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
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
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
      'id',
      'ids',
      'name',
      'step',
      'value',
      'invalid',
      'disabled',
      'readOnly',
      'onValueChange',
      'onValueChangeEnd',
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
