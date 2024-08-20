<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface SliderRangeProps extends SvelteHtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSliderContext} from './context.svelte.js';

  let {children, ...props}: SliderRangeProps = $props();

  let context = useSliderContext();

  let attrs = $derived(mergeProps(props, context.getRangeProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
