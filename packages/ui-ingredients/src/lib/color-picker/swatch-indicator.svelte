<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerSwatchIndicatorProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerContext,
    getColorPickerSwatchPropsContext,
  } from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: ColorPickerSwatchIndicatorProps = $props();

  let colorPicker = getColorPickerContext();
  let swatchProps = getColorPickerSwatchPropsContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getSwatchIndicatorProps(swatchProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
