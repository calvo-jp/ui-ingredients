<script lang="ts" module>
  import type {ThumbProps} from '@zag-js/slider';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface SliderThumbProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ThumbProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {
    getSliderContext,
    setSliderThumbPropsContext,
  } from './slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SliderThumbProps = $props();

  let slider = getSliderContext();

  let [thumbProps, localProps] = $derived(
    createSplitProps<ThumbProps>(['name', 'index'])(props),
  );

  let mergedProps = $derived(
    mergeProps(slider.getThumbProps(thumbProps), localProps),
  );

  setSliderThumbPropsContext(() => thumbProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
