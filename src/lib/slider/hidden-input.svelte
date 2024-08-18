<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface SliderHiddenInputProps extends Assign<SvelteHTMLElements['input'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSliderContext, useSliderThumbContext} from './context.svelte.js';

  let {children, ...props}: SliderHiddenInputProps = $props();

  let context = useSliderContext();
  let thumbContext = useSliderThumbContext();

  let attrs = $derived(mergeProps(props, context.getHiddenInputProps(thumbContext)));
</script>

<input {...attrs} />
