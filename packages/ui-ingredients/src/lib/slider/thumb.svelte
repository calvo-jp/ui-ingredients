<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ThumbProps} from '@zag-js/slider';

  export interface SliderThumbProps extends Assign<HtmlProps<'div'>, ThumbProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {sliderContext, sliderThumbPropsContext} from './context.svelte.js';

  let {name, index, children, ...props}: SliderThumbProps = $props();

  let slider = sliderContext.get();
  let thumbProps = $derived({
    name,
    index,
  });

  let attrs = $derived(mergeProps(props, slider.getThumbProps(thumbProps)));

  sliderThumbPropsContext.set(() => thumbProps);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
