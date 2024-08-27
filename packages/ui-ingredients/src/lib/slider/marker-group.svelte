<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SliderMarkerGroupProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';

  let {children, ...props}: SliderMarkerGroupProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(mergeProps(props, slider.getMarkerGroupProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
