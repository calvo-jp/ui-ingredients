<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {MarkerProps} from '@zag-js/slider';

  export interface SliderMarkerProps extends Assign<HtmlProps<'div'>, MarkerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';

  let {value, children, ...props}: SliderMarkerProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      slider.getMarkerProps({
        value,
      }),
    ),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
