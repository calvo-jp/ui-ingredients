<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface CarouselItemGroupProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCarouselContext} from './context.svelte.js';

  let {children, ...props}: CarouselItemGroupProps = $props();

  let context = useCarouselContext();

  let attrs = $derived(mergeProps(props, context.getItemGroupProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
