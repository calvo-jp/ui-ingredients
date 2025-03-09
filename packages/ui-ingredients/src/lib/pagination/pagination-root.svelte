<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreatePaginationProps,
    CreatePaginationReturn,
  } from './create-pagination.svelte.js';

  export interface PaginationProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreatePaginationReturn>,
      Optional<CreatePaginationProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createPagination} from './create-pagination.svelte.js';
  import {setPaginationContext} from './pagination-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PaginationProps = $props();

  let uid = $props.id();

  let [createPaginationProps, localProps] = $derived(
    createSplitProps<Omit<CreatePaginationProps, 'id'>>([
      'count',
      'defaultPage',
      'defaultPageSize',
      'ids',
      'onPageChange',
      'onPageSizeChange',
      'page',
      'pageSize',
      'siblingCount',
      'translations',
      'type',
    ])(props),
  );

  let pagination = createPagination(
    reflect(() => ({...createPaginationProps, id: id ?? uid})),
  );

  let mergedProps = $derived(mergeProps(pagination.getRootProps(), localProps));

  setPaginationContext(pagination);
</script>

{#if asChild}
  {@render asChild(mergedProps, pagination)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(pagination)}
  </div>
{/if}
