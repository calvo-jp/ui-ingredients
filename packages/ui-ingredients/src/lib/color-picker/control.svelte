<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerControlProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(mergeProps(props, colorPicker.getControlProps()));
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
