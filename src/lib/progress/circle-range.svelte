<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ProgressCircleRangeProps extends Assign<SvelteHTMLElements['circle'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useProgressContext} from './context.svelte.js';

  let {children, ...props}: ProgressCircleRangeProps = $props();

  let context = useProgressContext();

  let attrs = $derived(mergeProps(props, context.api.getCircleRangeProps()));
</script>

<circle {...attrs}>
  {@render children?.()}
</circle>
