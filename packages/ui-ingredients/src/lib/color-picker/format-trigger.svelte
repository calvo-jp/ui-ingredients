<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerFormatTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerFormatTriggerProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getFormatTriggerProps()),
  );
</script>

<button type="button" {...mergedProps}>
  {@render children?.()}
</button>
