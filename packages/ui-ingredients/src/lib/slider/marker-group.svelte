<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SliderMarkerGroupProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSliderContext} from './context.svelte.js';

  let {children, ...props}: SliderMarkerGroupProps = $props();

  let context = useSliderContext();

  let attrs = $derived(mergeProps(props, context.getMarkerGroupProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
