<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerFormatSelectProps
    extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: ColorPickerFormatSelectProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getFormatSelectProps()),
  );

  let formats = ['rgba', 'hsla', 'hsba'];
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <select bind:this={e} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {#each formats as format}
        <option value={format}>{format}</option>
      {/each}
    {/if}
  </select>
{/if}
