<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {SwatchTriggerProps} from '@zag-js/color-picker';

  export interface ColorPickerSwatchTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      SwatchTriggerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
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
      props,
      colorPicker.getSwatchTriggerProps({
        value,
        disabled,
      }),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
