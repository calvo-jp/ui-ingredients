<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {
    CreatePaginationContextProps,
    CreatePaginationContextReturn,
  } from './context.svelte.js';

  export interface PaginationProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreatePaginationContextProps>
    > {
    children?: Snippet<[CreatePaginationContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createPaginationContext, setPaginationContext} from './context.svelte.js';

  let {
    id = uuid(),
    ids,
    dir,
    type,
    page,
    pageSize,
    count,
    siblingCount,
    translations,
    onPageChange,
    onPageSizeChange,
    getRootNode,
    children,
    ...props
  }: PaginationProps = $props();

  let context = createPaginationContext({
    id,
    ids,
    dir,
    type,
    page,
    pageSize,
    count,
    siblingCount,
    translations,
    onPageChange,
    onPageSizeChange,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setPaginationContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
