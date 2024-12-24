<script lang="ts" module>
  import type {SwatchTriggerProps} from '@zag-js/color-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface ColorPickerSwatchTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      SwatchTriggerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    value,
    disabled,
    asChild,
    children,
    ...props
  }: ColorPickerSwatchTriggerProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(
      colorPicker.getSwatchTriggerProps({
        value,
        disabled,
      }),
      props,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
