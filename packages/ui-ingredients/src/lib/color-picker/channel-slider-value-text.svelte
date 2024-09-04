<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerChannelSliderValueTextProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerChannelSliderPropsContext,
    getColorPickerContext,
  } from './context.svelte.js';

  let {children, ...props}: ColorPickerChannelSliderValueTextProps = $props();

  let locale = getLocaleContext();
  let colorPicker = getColorPickerContext();
  let channelSliderProps = getColorPickerChannelSliderPropsContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      colorPicker.getChannelSliderValueTextProps(channelSliderProps),
    ),
  );
</script>

<div {...mergedProps}>
  {#if children}
    {@render children()}
  {:else}
    {colorPicker.getChannelValueText(channelSliderProps.channel, locale.locale)}
  {/if}
</div>
