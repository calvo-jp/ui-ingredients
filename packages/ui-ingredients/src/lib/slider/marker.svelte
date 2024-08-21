<script lang="ts" context="module">
  import type {Assign, HtmlIngredientsProps} from '$lib/types.js';
  import type {MarkerProps} from '@zag-js/slider';

  export interface SliderMarkerProps
    extends Assign<HtmlIngredientsProps<'span'>, MarkerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSliderContext} from './context.svelte.js';

  let {value, children, ...props}: SliderMarkerProps = $props();

  let context = useSliderContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getMarkerProps({
        value,
      }),
    ),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
