<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ProgressCircleProps extends Assign<SvelteHTMLElements['svg'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useProgressContext} from './context.svelte.js';

  let {children, ...props}: ProgressCircleProps = $props();

  let context = useProgressContext();

  let attrs = $derived(mergeProps(props, context.api.getCircleProps()));
</script>

<svg {...attrs}>
  {@render children?.()}
</svg>
