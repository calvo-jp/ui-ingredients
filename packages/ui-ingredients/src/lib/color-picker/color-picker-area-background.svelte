<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerAreaBackgroundProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerAreaPropsContext,
    getColorPickerContext,
  } from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ColorPickerAreaBackgroundProps = $props();

  let colorPicker = getColorPickerContext();
  let areaProps = getColorPickerAreaPropsContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getAreaBackgroundProps(areaProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
