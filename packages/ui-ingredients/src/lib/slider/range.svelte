<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SliderRangeProps extends HtmlIngredientProps<'div'> {}
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
