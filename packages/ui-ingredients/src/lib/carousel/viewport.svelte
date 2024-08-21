<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CarouselViewportProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCarouselContext} from './context.svelte.js';

  let {children, ...props}: CarouselViewportProps = $props();

  let context = useCarouselContext();

  let attrs = $derived(mergeProps(props, context.getViewportProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
