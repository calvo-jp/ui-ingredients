<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ChannelSliderProps} from '@zag-js/color-picker';

  export interface ColorPickerChannelSliderProps
    extends Assign<HtmlProps<'div'>, ChannelSliderProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerChannelSliderPropsContext, colorPickerContext} from './context.svelte.js';

  let {format, channel, orientation, children, ...props}: ColorPickerChannelSliderProps = $props();

  let colorPicker = colorPickerContext.get();
  let channelSliderProps: ChannelSliderProps = $derived({
    format,
    channel,
    orientation,
  });

  let attrs = $derived(mergeProps(props, colorPicker.getChannelSliderProps(channelSliderProps)));

  colorPickerChannelSliderPropsContext.set(() => channelSliderProps);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
