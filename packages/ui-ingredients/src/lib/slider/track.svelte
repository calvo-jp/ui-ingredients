<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface SliderTrackProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSliderContext} from './context.svelte.js';

  let {children, ...props}: SliderTrackProps = $props();

  let context = useSliderContext();

  let attrs = $derived(mergeProps(props, context.getTrackProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
