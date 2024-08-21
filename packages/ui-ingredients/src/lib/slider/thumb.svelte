<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ThumbProps} from '@zag-js/slider';

  export interface SliderThumbProps
    extends Assign<HtmlIngredientProps<'div'>, ThumbProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setSliderThumbContext, useSliderContext} from './context.svelte.js';

  let {name, index, children, ...props}: SliderThumbProps = $props();

  let context = useSliderContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getThumbProps({
        name,
        index,
      }),
    ),
  );

  setSliderThumbContext({
    name,
    index,
  });
</script>

<div {...attrs}>
  {@render children?.()}
</div>
