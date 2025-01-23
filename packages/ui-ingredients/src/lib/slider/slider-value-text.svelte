<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SliderValueTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getSliderContext} from './slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SliderValueTextProps = $props();

  let slider = getSliderContext();
  let mergedProps = $derived(mergeProps(slider.getValueTextProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {slider.value.join(', ')}
    {/if}
  </span>
{/if}
