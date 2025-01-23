<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface AngleSliderHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getAngleSliderContext} from './angle-slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: AngleSliderHiddenInputProps = $props();

  let angleSlider = getAngleSliderContext();
  let mergedProps = $derived(
    mergeProps(angleSlider.getHiddenInputProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
