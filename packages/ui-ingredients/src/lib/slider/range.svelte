<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SliderRangeProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {sliderContext} from './context.svelte.js';

  let {children, ...props}: SliderRangeProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(mergeProps(props, slider.getRangeProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
