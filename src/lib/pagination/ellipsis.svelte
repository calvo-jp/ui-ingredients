<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {EllipsisProps} from '@zag-js/pagination';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface PaginationEllipsisProps
    extends Assign<SvelteHTMLElements['span'], EllipsisProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePaginationContext} from './context.svelte.js';

  let {index, children, ...props}: PaginationEllipsisProps = $props();

  let context = usePaginationContext();

  let attrs = $derived(mergeProps(props, context.getEllipsisProps({index})));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
