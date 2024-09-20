<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ChannelProps} from '@zag-js/color-picker';

  export interface ColorPickerChannelSliderLabelProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ChannelProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerChannelPropsContext,
    getColorPickerContext,
  } from './color-picker-context.svelte.js';

  let {
    this: e,
    channel,
    orientation,
    asChild,
    children,
    ...props
  }: ColorPickerChannelSliderLabelProps = $props();

  let colorPicker = getColorPickerContext();
  let channelProps = getColorPickerChannelPropsContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getChannelSliderLabelProps(channelProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
