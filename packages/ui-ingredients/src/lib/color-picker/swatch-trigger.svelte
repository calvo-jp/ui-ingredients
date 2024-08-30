<script lang="ts" module>
  import type {Assign, HTMLProps} from '$lib/types.js';
  import type {SwatchTriggerProps} from '@zag-js/color-picker';

  export interface ColorPickerSwatchTriggerProps
    extends Assign<HTMLProps<'button'>, Pick<SwatchTriggerProps, 'disabled'>> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {
    colorPickerContext,
    colorPickerSwatchPropsContext,
  } from './context.svelte.js';

  let {disabled, children, ...props}: ColorPickerSwatchTriggerProps = $props();

  let colorPicker = colorPickerContext.get();
  let swatchProps = colorPickerSwatchPropsContext.get();

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
