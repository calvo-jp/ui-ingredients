<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CarouselPrevTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCarouselContext} from './context.svelte.js';

  let {children, ...props}: CarouselPrevTriggerProps = $props();

  let context = useCarouselContext();

  let attrs = $derived(mergeProps(props, context.getPrevTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
