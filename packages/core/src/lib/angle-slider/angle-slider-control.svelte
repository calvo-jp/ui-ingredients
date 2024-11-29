<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AngleSliderControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getAngleSliderContext} from './angle-slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AngleSliderControlProps = $props();

  let angleSlider = getAngleSliderContext();
  let mergedProps = $derived(mergeProps(angleSlider.getControlProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
