<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {EllipsisProps} from '@zag-js/pagination';

  export interface PaginationEllipsisProps extends Assign<HtmlProps<'div'>, EllipsisProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {paginationContext} from './context.svelte.js';

  let {index, children, ...props}: PaginationEllipsisProps = $props();

  let pagination = paginationContext.get();

  let attrs = $derived(mergeProps(props, pagination.getEllipsisProps({index})));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
