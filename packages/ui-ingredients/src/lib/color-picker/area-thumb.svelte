<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerAreaThumbProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerAreaPropsContext,
    getColorPickerContext,
  } from './context.svelte.js';

  let {children, ...props}: ColorPickerAreaThumbProps = $props();

  let colorPicker = getColorPickerContext();
  let areaProps = getColorPickerAreaPropsContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getAreaThumbProps(areaProps)),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
