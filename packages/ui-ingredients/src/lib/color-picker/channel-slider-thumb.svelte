<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerChannelSliderThumbProps extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerChannelSliderPropsContext, colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerChannelSliderThumbProps = $props();

  let colorPicker = colorPickerContext.get();
  let channelSliderProps = colorPickerChannelSliderPropsContext.get();

  let attrs = $derived(
    mergeProps(props, colorPicker.getChannelSliderThumbProps(channelSliderProps)),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
