<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerFormatSelectProps
    extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ColorPickerFormatSelectProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getFormatSelectProps()),
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
