<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerAreaThumbProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerAreaPropsContext,
    getColorPickerContext,
  } from './color-picker-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: ColorPickerAreaThumbProps = $props();

  let colorPicker = getColorPickerContext();
  let areaProps = getColorPickerAreaPropsContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getAreaThumbProps(areaProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
