<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ThumbProps} from '@zag-js/slider';

  export interface SliderThumbProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ThumbProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getSliderContext,
    setSliderThumbPropsContext,
  } from './slider-context.svelte.js';

  let {this: e, asChild, children, ...props}: SliderThumbProps = $props();

  let slider = getSliderContext();

  let [thumbProps, localProps] = $derived(
    createSplitProps<ThumbProps>(['name', 'index'])(props),
  );

  let mergedProps = $derived(
    mergeProps(localProps, slider.getThumbProps(thumbProps)),
  );

  setSliderThumbPropsContext(() => thumbProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
