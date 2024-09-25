<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ChannelInputProps} from '@zag-js/color-picker';

  export interface ColorPickerChannelInputProps
    extends Assign<
      HtmlIngredientProps<'input', HTMLInputElement>,
      ChannelInputProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    this: e,
    channel,
    orientation,
    asChild,
    ...props
  }: ColorPickerChannelInputProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      colorPicker.getChannelInputProps({
        channel,
        orientation,
      }),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={e} {...mergedProps} />
{/if}
