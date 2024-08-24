<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CarouselNextTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {carouselContext} from './context.svelte.js';

  let {children, ...props}: CarouselNextTriggerProps = $props();

  let context = carouselContext.get();

  let attrs = $derived(mergeProps(props, context.getNextTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
