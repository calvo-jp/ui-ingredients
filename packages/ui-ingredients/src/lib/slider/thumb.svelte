<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ThumbProps} from '@zag-js/slider';

  export interface SliderThumbProps extends Assign<HTMLProps<'div'>, ThumbProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext, sliderThumbPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: SliderThumbProps = $props();

  let slider = sliderContext.get();

  let [thumbProps, otherProps] = createSplitProps<ThumbProps>(['name', 'index'])(props);

  let mergedProps = $derived(mergeProps(otherProps, slider.getThumbProps(thumbProps)));

  sliderThumbPropsContext.set(() => thumbProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
