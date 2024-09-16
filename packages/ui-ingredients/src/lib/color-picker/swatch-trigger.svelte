<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {SwatchTriggerProps} from '@zag-js/color-picker';

  export interface ColorPickerSwatchTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      Pick<SwatchTriggerProps, 'disabled'>
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerContext,
    getColorPickerSwatchPropsContext,
  } from './context.svelte.js';

  let {disabled, children, ...props}: ColorPickerSwatchTriggerProps = $props();

  let colorPicker = getColorPickerContext();
  let swatchProps = getColorPickerSwatchPropsContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      colorPicker.getSwatchTriggerProps({
        value: swatchProps.value,
        disabled,
      }),
    ),
  );
</script>

<button type="button" {...mergedProps}>
  {@render children?.()}
</button>
