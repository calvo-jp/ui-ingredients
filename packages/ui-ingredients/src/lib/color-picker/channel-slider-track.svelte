<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerChannelSliderTrackProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerChannelSliderPropsContext,
    getColorPickerContext,
  } from './context.svelte.js';

  let {children, ...props}: ColorPickerChannelSliderTrackProps = $props();

  let colorPicker = getColorPickerContext();
  let channelSliderProps = getColorPickerChannelSliderPropsContext();

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
