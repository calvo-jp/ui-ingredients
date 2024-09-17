<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerChannelSliderValueTextProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerChannelSliderPropsContext,
    getColorPickerContext,
  } from './color-picker-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: ColorPickerChannelSliderValueTextProps = $props();

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

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {colorPicker.getChannelValueText(
        channelSliderProps.channel,
        locale.locale,
      )}
    {/if}
  </div>
{/if}
