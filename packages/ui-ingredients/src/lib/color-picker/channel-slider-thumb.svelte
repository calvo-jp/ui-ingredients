<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerChannelSliderThumbProps
    extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerChannelSliderPropsContext,
    getColorPickerContext,
  } from './context.svelte.js';

  let {children, ...props}: ColorPickerChannelSliderThumbProps = $props();

  let colorPicker = getColorPickerContext();
  let channelSliderProps = getColorPickerChannelSliderPropsContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      colorPicker.getChannelSliderThumbProps(channelSliderProps),
    ),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
