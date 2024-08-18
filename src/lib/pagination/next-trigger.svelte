<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface PaginationNextTriggerProps extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePaginationContext} from './context.svelte.js';

  let {children, ...props}: PaginationNextTriggerProps = $props();

  let context = usePaginationContext();

  let attrs = $derived(mergeProps(props, context.api.getNextTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
