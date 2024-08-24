<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {MarkerProps} from '@zag-js/slider';

  export interface SliderMarkerProps extends Assign<HtmlIngredientProps<'span'>, MarkerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {sliderContext} from './context.svelte.js';

  let {value, children, ...props}: SliderMarkerProps = $props();

  let context = sliderContext.get();

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
