<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerChannelSliderValueTextProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
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
  }: ColorPickerChannelSliderValueTextProps = $props();

  let locale = getLocaleContext();
  let colorPicker = getColorPickerContext();
  let channelProps = getColorPickerChannelPropsContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getChannelSliderValueTextProps(channelProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {colorPicker.getChannelValueText(channelProps.channel, locale.locale)}
    {/if}
  </div>
{/if}
