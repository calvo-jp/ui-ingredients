<script lang="ts" module>
  import type {ChannelProps} from '@zag-js/color-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface ColorPickerChannelSliderProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ChannelProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getColorPickerContext,
    getColorPickerFormatPropsContext,
    setColorPickerChannelPropsContext,
  } from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    channel,
    orientation,
    asChild,
    children,
    ...props
  }: ColorPickerChannelSliderProps = $props();

  let colorPicker = getColorPickerContext();
  let formatProps = getColorPickerFormatPropsContext();
  let channelProps = $derived({
    channel,
    orientation,
  });

  let channelSliderProps = $derived({
    ...formatProps,
    ...channelProps,
  });

  let mergedProps = $derived(
    mergeProps(colorPicker.getChannelSliderProps(channelSliderProps), props),
  );

  setColorPickerChannelPropsContext(() => channelProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
