<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerChannelSliderTrackProps
    extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    colorPickerChannelSliderPropsContext,
    colorPickerContext,
  } from './context.svelte.js';

  let {children, ...props}: ColorPickerChannelSliderTrackProps = $props();

  let colorPicker = colorPickerContext.get();
  let channelSliderProps = colorPickerChannelSliderPropsContext.get();

  let mergedProps = $derived(
    mergeProps(
      props,
      colorPicker.getChannelSliderTrackProps(channelSliderProps),
    ),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
