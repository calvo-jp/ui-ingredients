<script lang="ts" module>
  import type {ChannelInputProps} from '@zag-js/color-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface ColorPickerChannelInputProps
    extends Assign<
      HtmlIngredientProps<'input', HTMLInputElement>,
      ChannelInputProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    channel,
    orientation,
    asChild,
    ...props
  }: ColorPickerChannelInputProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(
      colorPicker.getChannelInputProps({
        channel,
        orientation,
      }),
      props,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
