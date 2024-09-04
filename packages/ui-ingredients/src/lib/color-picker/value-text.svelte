<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerValueTextProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerValueTextProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getValueTextProps()),
  );
</script>

<div {...mergedProps}>
  {#if children}
    {@render children()}
  {:else}
    {colorPicker.valueAsString}
  {/if}
</div>
