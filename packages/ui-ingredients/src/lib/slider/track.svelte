<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SliderTrackProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';

  let {children, ...props}: SliderTrackProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(mergeProps(props, slider.getTrackProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
