<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SliderTrackProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSliderContext} from './context.svelte.js';

  let {children, ...props}: SliderTrackProps = $props();

  let context = useSliderContext();

  let attrs = $derived(mergeProps(props, context.getTrackProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
