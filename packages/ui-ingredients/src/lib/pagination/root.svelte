<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreatePaginationProps, CreatePaginationReturn} from './create-pagination.svelte.js';

  export interface PaginationProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreatePaginationProps> {
    children?: Snippet<[pagination: CreatePaginationReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {paginationContext} from './context.svelte.js';
  import {createPagination} from './create-pagination.svelte.js';

  let {
    id,
    ids,
    type,
    page,
    pageSize,
    count,
    siblingCount,
    translations,
    onPageChange,
    onPageSizeChange,
    children,
    ...props
  }: PaginationProps = $props();

  let pagination = createPagination({
    id,
    ids,
    type,
    page,
    pageSize,
    count,
    siblingCount,
    translations,
    onPageChange,
    onPageSizeChange,
  });

  let attrs = $derived(mergeProps(props, pagination.getRootProps()));

  paginationContext.set(pagination);
</script>

<div {...attrs}>
  {@render children?.(pagination)}
</div>
