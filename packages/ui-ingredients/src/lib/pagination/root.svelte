<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreatePaginationProps,
    CreatePaginationReturn,
  } from './create-pagination.svelte.js';

  export interface PaginationProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreatePaginationProps> {
    asChild?: AsChild<CreatePaginationReturn>;
    children?: Snippet<[CreatePaginationReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {paginationContext} from './context.svelte.js';
  import {createPagination} from './create-pagination.svelte.js';

  let {asChild, children, ...props}: PaginationProps = $props();

  let [paginationProps, otherProps] = $derived(
    createSplitProps<CreatePaginationProps>([
      'id',
      'ids',
      'type',
      'page',
      'pageSize',
      'count',
      'siblingCount',
      'translations',
      'onPageChange',
      'onPageSizeChange',
    ])(props),
  );

  let pagination = createPagination(reflect(() => paginationProps));

  let mergedProps = $derived(mergeProps(otherProps, pagination.getRootProps()));

  paginationContext.set(pagination);
</script>

{#if asChild}
  {@render asChild(mergedProps, pagination)}
{:else}
  <div {...mergedProps}>
    {@render children?.(pagination)}
  </div>
{/if}
