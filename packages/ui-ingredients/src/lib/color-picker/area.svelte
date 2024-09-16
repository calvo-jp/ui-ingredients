<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {AreaProps} from '@zag-js/color-picker';

  export interface ColorPickerAreaProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, AreaProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerContext,
    setColorPickerAreaPropsContext,
  } from './context.svelte.js';

  let {xChannel, yChannel, children, ...props}: ColorPickerAreaProps = $props();

  let colorPicker = getColorPickerContext();
  let areaProps: AreaProps = $derived({
    xChannel,
    yChannel,
  });

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getAreaProps(areaProps)),
  );

  setColorPickerAreaPropsContext(() => areaProps);
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
