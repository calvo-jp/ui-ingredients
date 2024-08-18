<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreatePaginationContextProps} from './context.svelte.js';

  export interface PaginationProps
    extends Assign<SvelteHTMLElements['div'], OptionalId<CreatePaginationContextProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createPaginationContext, setPaginationContext} from './context.svelte.js';

  let {
    id = nanoid(),
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

  let attrs = $derived(mergeProps(props, context.api.getRootProps()));

  setPaginationContext(context);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
