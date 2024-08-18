<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ProgressCircleTrackProps extends Assign<SvelteHTMLElements['circle'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useProgressContext} from './context.svelte.js';

  let {children, ...props}: ProgressCircleTrackProps = $props();

  let context = useProgressContext();

  let attrs = $derived(mergeProps(props, context.api.getCircleTrackProps()));
</script>

<circle {...attrs}>
  {@render children?.()}
</circle>
