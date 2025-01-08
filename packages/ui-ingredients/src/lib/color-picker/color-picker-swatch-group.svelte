<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ColorPickerSwatchGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ColorPickerSwatchGroupProps = $props();

  let colorPicker = getColorPickerContext();
  let mergedProps = $derived(
    mergeProps(colorPicker.getSwatchGroupProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
