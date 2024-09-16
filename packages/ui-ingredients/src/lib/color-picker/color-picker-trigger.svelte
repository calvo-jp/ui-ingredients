<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: ColorPickerTriggerProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(mergeProps(props, colorPicker.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
