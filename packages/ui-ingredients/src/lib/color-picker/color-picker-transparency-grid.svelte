<script lang="ts" module>
  import type {TransparencyGridProps} from '@zag-js/color-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface ColorPickerTransparencyGridProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement>,
      TransparencyGridProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
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
    mergeProps(colorPicker.getTransparencyGridProps({size}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
