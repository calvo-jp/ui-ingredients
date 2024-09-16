<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SliderMarkerGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSliderContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: SliderMarkerGroupProps = $props();

  let slider = getSliderContext();

  let mergedProps = $derived(mergeProps(props, slider.getMarkerGroupProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
