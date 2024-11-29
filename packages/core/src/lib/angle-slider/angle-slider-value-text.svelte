<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AngleSliderValueTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getAngleSliderContext} from './angle-slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AngleSliderValueTextProps = $props();

  let angleSlider = getAngleSliderContext();
  let mergedProps = $derived(
    mergeProps(angleSlider.getValueTextProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {angleSlider.valueAsDegree}
    {/if}
  </span>
{/if}
