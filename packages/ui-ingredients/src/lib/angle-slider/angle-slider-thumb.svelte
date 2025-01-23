<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface AngleSliderThumbProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getAngleSliderContext} from './angle-slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AngleSliderThumbProps = $props();

  let angleSlider = getAngleSliderContext();
  let mergedProps = $derived(mergeProps(angleSlider.getThumbProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
