<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreatePaginationContextProps,
    CreatePaginationContextReturn,
  } from './context.svelte.js';

  export interface PaginationProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreatePaginationContextProps, 'id'>
    > {
    children?: Snippet<[context: CreatePaginationContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createPaginationContext, setPaginationContext} from './context.svelte.js';

  let {
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
    children,
    ...props
  }: PaginationProps = $props();

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let context = createPaginationContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
    type,
    page,
    pageSize,
    count,
    siblingCount,
    translations,
    onPageChange,
    onPageSizeChange,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setPaginationContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
