<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {EllipsisProps} from '@zag-js/pagination';

  export interface PaginationEllipsisProps extends Assign<HtmlProps<'span'>, EllipsisProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {paginationContext} from './context.svelte.js';

  let {index, children, ...props}: PaginationEllipsisProps = $props();

  let context = paginationContext.get();

  let attrs = $derived(mergeProps(props, context.getEllipsisProps({index})));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
