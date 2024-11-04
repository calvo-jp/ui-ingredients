<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerChannelSliderLabelProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerChannelPropsContext,
    getColorPickerContext,
  } from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ColorPickerChannelSliderLabelProps = $props();

  let colorPicker = getColorPickerContext();
  let channelProps = getColorPickerChannelPropsContext();

  let mergedProps = $derived(
    mergeProps(colorPicker.getChannelSliderLabelProps(channelProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
