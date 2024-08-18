<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/carousel';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface CarouselItemProps extends Assign<SvelteHTMLElements['button'], ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useCarouselContext} from './context.svelte.js';

  let {index, children, ...props}: CarouselItemProps = $props();

  let context = useCarouselContext();

  let attrs = $derived(mergeProps(props, context.getItemProps({index})));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
