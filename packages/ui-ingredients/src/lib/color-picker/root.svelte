<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateColorPickerProps,
    CreateColorPickerReturn,
  } from './create-color-picker.svelte.js';

  export interface ColorPickerProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateColorPickerProps> {
    children?: Snippet<[colorPicker: CreateColorPickerReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';
  import {createColorPicker} from './create-color-picker.svelte.js';

  let {
    id,
    ids,
    open,
    name,
    value,
    format,
    disabled,
    required,
    readOnly,
    defaultOpen,
    positioning,
    onOpenChange,
    closeOnSelect,
    initialFocusEl,
    onValueChange,
    onValueChangeEnd,
    onFocusOutside,
    onFormatChange,
    onInteractOutside,
    onPointerDownOutside,
    children,
    ...props
  }: ColorPickerProps = $props();

  let colorPicker = createColorPicker({
    id,
    ids,
    open,
    name,
    value,
    format,
    disabled,
    required,
    readOnly,
    defaultOpen,
    positioning,
    onOpenChange,
    closeOnSelect,
    initialFocusEl,
    onValueChange,
    onValueChangeEnd,
    onFocusOutside,
    onFormatChange,
    onInteractOutside,
    onPointerDownOutside,
  });

  let attrs = $derived(mergeProps(props, colorPicker.getRootProps()));

  colorPickerContext.set(colorPicker);
</script>

<div {...attrs}>
  {@render children?.(colorPicker)}
</div>
