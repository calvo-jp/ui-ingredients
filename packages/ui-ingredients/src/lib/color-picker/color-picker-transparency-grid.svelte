<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {TransparencyGridProps} from '@zag-js/color-picker';

  export interface ColorPickerTransparencyGridProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement>,
      TransparencyGridProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    size,
    asChild,
    children,
    ...props
  }: ColorPickerTransparencyGridProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getTransparencyGridProps({size})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
