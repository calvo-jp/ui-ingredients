<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerChannelSliderValueTextProps
    extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {localeContext} from '$lib/locale-provider/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {
    colorPickerChannelSliderPropsContext,
    colorPickerContext,
  } from './context.svelte.js';

  let {children, ...props}: ColorPickerChannelSliderValueTextProps = $props();

  let locale = localeContext.get();
  let colorPicker = colorPickerContext.get();
  let channelSliderProps = colorPickerChannelSliderPropsContext.get();

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
