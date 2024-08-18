<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface CarouselIndicatorGroupProps extends Assign<SvelteHTMLElements['div'], {}> {}
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
