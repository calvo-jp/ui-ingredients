<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ColorPickerFormatSelectProps
    extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ColorPickerFormatSelectProps = $props();

  let colorPicker = getColorPickerContext();
  let mergedProps = $derived(
    mergeProps(colorPicker.getFormatSelectProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <select bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {#each colorPicker.getFormats() as format}
        <option value={format.value}>
          {format.label}
        </option>
      {/each}
    {/if}
  </select>
{/if}
