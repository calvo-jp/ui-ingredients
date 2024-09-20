<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ChannelProps} from '@zag-js/color-picker';

  export interface ColorPickerChannelSliderProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ChannelProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerContext,
    getColorPickerFormatPropsContext,
    setColorPickerChannelPropsContext,
  } from './color-picker-context.svelte.js';

  let {
    this: e,
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
    mergeProps(props, colorPicker.getChannelSliderProps(channelSliderProps)),
  );

  setColorPickerChannelPropsContext(() => channelProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
