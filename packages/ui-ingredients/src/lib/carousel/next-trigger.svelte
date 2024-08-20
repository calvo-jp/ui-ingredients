<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface CarouselNextTriggerProps extends SvelteHtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCarouselContext} from './context.svelte.js';

  let {children, ...props}: CarouselNextTriggerProps = $props();

  let context = useCarouselContext();

  let attrs = $derived(mergeProps(props, context.getNextTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
