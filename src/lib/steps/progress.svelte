<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface StepsProgressProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useStepsContext} from './context.svelte.js';

  let {children, ...props}: StepsProgressProps = $props();

  let context = useStepsContext();

  let attrs = $derived(mergeProps(props, context.getProgressProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
