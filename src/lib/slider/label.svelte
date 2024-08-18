<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SliderLabelProps extends Assign<SvelteHTMLElements['label'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSliderContext} from './context.svelte.js';

  let {children, ...props}: SliderLabelProps = $props();

  let context = useSliderContext();

  let attrs = $derived(mergeProps(props, context.api.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
