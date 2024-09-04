<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ChannelInputProps} from '@zag-js/color-picker';

  export interface ColorPickerChannelInputProps
    extends Assign<HtmlIngredientProps<'input'>, ChannelInputProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {channel, orientation, ...props}: ColorPickerChannelInputProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      colorPicker.getChannelInputProps({
        channel,
        orientation,
      }),
    ),
  );
</script>

<input {...mergedProps} />
