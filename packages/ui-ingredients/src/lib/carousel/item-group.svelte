<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CarouselItemGroupProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {carouselContext} from './context.svelte.js';

  let {children, ...props}: CarouselItemGroupProps = $props();

  let context = carouselContext.get();

  let attrs = $derived(mergeProps(props, context.getItemGroupProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
