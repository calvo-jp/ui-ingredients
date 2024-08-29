<script lang="ts" module>
  import type {AsChild, Assign, HtmlProps} from '$lib/types.js';
  import type {ThumbProps} from '@zag-js/slider';

  export interface SliderThumbProps extends Assign<HtmlProps<'div'>, ThumbProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext, sliderThumbPropsContext} from './context.svelte.js';

  let {name, index, asChild, children, ...props}: SliderThumbProps = $props();

  let slider = sliderContext.get();
  let thumbProps = $derived({
    name,
    index,
  });

  let attrs = $derived(mergeProps(props, slider.getThumbProps(thumbProps)));

  sliderThumbPropsContext.set(() => thumbProps);
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
