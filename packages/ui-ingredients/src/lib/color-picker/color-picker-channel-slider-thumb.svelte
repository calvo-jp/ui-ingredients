<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerChannelSliderThumbProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerChannelPropsContext,
    getColorPickerContext,
    getColorPickerFormatPropsContext,
  } from './color-picker-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: ColorPickerChannelSliderThumbProps = $props();

  let colorPicker = getColorPickerContext();
  let formatProps = getColorPickerFormatPropsContext();
  let channelProps = getColorPickerChannelPropsContext();
  let channelSliderProps = $derived({
    ...formatProps,
    ...channelProps,
  });

  let mergedProps = $derived(
    mergeProps(
      props,
      colorPicker.getChannelSliderThumbProps(channelSliderProps),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
