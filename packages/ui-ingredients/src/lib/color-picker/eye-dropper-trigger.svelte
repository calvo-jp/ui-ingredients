<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerEyeDropperTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerEyeDropperTriggerProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getEyeDropperTriggerProps()),
  );
</script>

<button type="button" {...mergedProps}>
  {@render children?.()}
</button>
