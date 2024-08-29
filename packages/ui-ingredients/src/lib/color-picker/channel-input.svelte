<script lang="ts" module>
  import type {Assign, HTMLProps} from '$lib/types.js';
  import type {ChannelInputProps} from '@zag-js/color-picker';

  export interface ColorPickerChannelInputProps
    extends Assign<HTMLProps<'input'>, ChannelInputProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {channel, orientation, ...props}: ColorPickerChannelInputProps = $props();

  let colorPicker = colorPickerContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      colorPicker.getChannelInputProps({
        channel,
        orientation,
      }),
    ),
  );
</script>

<input {...attrs} />
