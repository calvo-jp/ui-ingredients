<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SliderTrackProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {sliderContext} from './context.svelte.js';

  let {children, ...props}: SliderTrackProps = $props();

  let context = sliderContext.get();

  let attrs = $derived(mergeProps(props, context.getTrackProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
