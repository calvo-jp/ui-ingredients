<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {SwatchTriggerProps} from '@zag-js/color-picker';

  export interface ColorPickerSwatchTriggerProps
    extends Assign<HtmlProps<'button'>, Pick<SwatchTriggerProps, 'disabled'>> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext, colorPickerSwatchPropsContext} from './context.svelte.js';

  let {disabled, children, ...props}: ColorPickerSwatchTriggerProps = $props();

  let colorPicker = colorPickerContext.get();
  let swatchProps = colorPickerSwatchPropsContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      colorPicker.getSwatchTriggerProps({
        value: swatchProps.value,
        disabled,
      }),
    ),
  );
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
