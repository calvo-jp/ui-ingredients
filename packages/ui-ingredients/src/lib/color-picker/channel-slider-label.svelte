<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ChannelProps} from '@zag-js/color-picker';

  export interface ColorPickerChannelSliderLabelProps
    extends Assign<HtmlIngredientProps<'div'>, ChannelProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerChannelSliderPropsContext,
    getColorPickerContext,
  } from './context.svelte.js';

  let {
    channel,
    orientation,
    children,
    ...props
  }: ColorPickerChannelSliderLabelProps = $props();

  let colorPicker = getColorPickerContext();
  let channelSliderProps = getColorPickerChannelSliderPropsContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      colorPicker.getChannelSliderLabelProps(channelSliderProps),
    ),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
