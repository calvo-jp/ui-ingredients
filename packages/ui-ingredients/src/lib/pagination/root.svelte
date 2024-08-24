<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreatePaginationProps, CreatePaginationReturn} from './create-pagination.svelte.js';

  export interface PaginationProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreatePaginationProps> {
    children?: Snippet<[api: CreatePaginationReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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

  let context = createPagination({
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

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  paginationContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
