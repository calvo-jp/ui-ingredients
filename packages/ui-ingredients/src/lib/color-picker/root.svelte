<script lang="ts" module>
  import type {Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateColorPickerProps,
    CreateColorPickerReturn,
  } from './create-color-picker.svelte.js';

  export interface ColorPickerProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateColorPickerProps> {
    children?: Snippet<[colorPicker: CreateColorPickerReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setColorPickerContext} from './context.svelte.js';
  import {createColorPicker} from './create-color-picker.svelte.js';

  let {children, ...props}: ColorPickerProps = $props();

  let [colorPickerProps, otherProps] = $derived(
    createSplitProps<CreateColorPickerProps>([
      'id',
      'ids',
      'open',
      'name',
      'value',
      'format',
      'disabled',
      'required',
      'readOnly',
      'defaultOpen',
      'positioning',
      'onOpenChange',
      'closeOnSelect',
      'initialFocusEl',
      'onValueChange',
      'onValueChangeEnd',
      'onFocusOutside',
      'onFormatChange',
      'onInteractOutside',
      'onPointerDownOutside',
    ])(props),
  );

  let colorPicker = createColorPicker(reflect(() => colorPickerProps));

  let mergedProps = $derived(
    mergeProps(otherProps, colorPicker.getRootProps()),
  );

  setColorPickerContext(colorPicker);
</script>

<div {...mergedProps}>
  {@render children?.(colorPicker)}
</div>
