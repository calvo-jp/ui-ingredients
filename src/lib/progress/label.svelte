<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ProgressLabelProps extends Assign<SvelteHTMLElements['div'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useProgressContext} from './context.svelte.js';

  let {children, ...props}: ProgressLabelProps = $props();

  let context = useProgressContext();

  let attrs = $derived(mergeProps(props, context.api.getLabelProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
