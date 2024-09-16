<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerEyeDropperTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: ColorPickerEyeDropperTriggerProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getEyeDropperTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
