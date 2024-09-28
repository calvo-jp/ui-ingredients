<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {ColorFormat} from '@zag-js/color-picker';

  export interface ColorPickerViewTextProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {
    format: ColorFormat;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerContext,
    setColorPickerFormatPropsContext,
  } from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    format,
    asChild,
    children,
    ...props
  }: ColorPickerViewTextProps = $props();

  let colorPicker = getColorPickerContext();
  let formatProps = $derived({format});
  let mergedProps = $derived(
    mergeProps(colorPicker.getViewProps(formatProps), props),
  );

  setColorPickerFormatPropsContext(() => formatProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
