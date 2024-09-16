<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ChannelSliderProps} from '@zag-js/color-picker';

  export interface ColorPickerChannelSliderProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement>,
      ChannelSliderProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerContext,
    setColorPickerChannelSliderPropsContext,
  } from './context.svelte.js';

  let {
    format,
    channel,
    orientation,
    children,
    ...props
  }: ColorPickerChannelSliderProps = $props();

  let colorPicker = getColorPickerContext();
  let channelSliderProps: ChannelSliderProps = $derived({
    format,
    channel,
    orientation,
  });

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getChannelSliderProps(channelSliderProps)),
  );

  setColorPickerChannelSliderPropsContext(() => channelSliderProps);
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
