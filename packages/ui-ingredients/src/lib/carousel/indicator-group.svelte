<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CarouselIndicatorGroupProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCarouselContext} from './context.svelte.js';

  let {children, ...props}: CarouselIndicatorGroupProps = $props();

  let context = useCarouselContext();

  let attrs = $derived(mergeProps(props, context.getIndicatorGroupProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
