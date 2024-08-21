<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface SliderMarkerGroupProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSliderContext} from './context.svelte.js';

  let {children, ...props}: SliderMarkerGroupProps = $props();

  let context = useSliderContext();

  let attrs = $derived(mergeProps(props, context.getMarkerGroupProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
