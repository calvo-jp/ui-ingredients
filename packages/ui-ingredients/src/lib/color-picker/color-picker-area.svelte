<script lang="ts" module>
  import type {AreaProps} from '@zag-js/color-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface ColorPickerAreaProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, AreaProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getColorPickerContext,
    setColorPickerAreaPropsContext,
  } from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    xChannel,
    yChannel,
    asChild,
    children,
    ...props
  }: ColorPickerAreaProps = $props();

  let colorPicker = getColorPickerContext();
  let areaProps: AreaProps = $derived({
    xChannel,
    yChannel,
  });

  let mergedProps = $derived(
    mergeProps(colorPicker.getAreaProps(areaProps), props),
  );

  setColorPickerAreaPropsContext(() => areaProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
