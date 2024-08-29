<script lang="ts" module>
  import type {Assign, HTMLProps} from '$lib/types.js';
  import type {ChannelProps} from '@zag-js/color-picker';

  export interface ColorPickerChannelSliderLabelProps
    extends Assign<HTMLProps<'div'>, ChannelProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerChannelSliderPropsContext, colorPickerContext} from './context.svelte.js';

  let {channel, orientation, children, ...props}: ColorPickerChannelSliderLabelProps = $props();

  let colorPicker = colorPickerContext.get();
  let channelSliderProps = colorPickerChannelSliderPropsContext.get();

  let attrs = $derived(
    mergeProps(props, colorPicker.getChannelSliderLabelProps(channelSliderProps)),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
