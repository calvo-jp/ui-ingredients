<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/pagination';

  export interface PaginationItemProps
    extends Assign<HtmlProps<'button'>, Omit<ItemProps, 'type'>> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {paginationContext} from './context.svelte.js';

  let {value, children, ...props}: PaginationItemProps = $props();

  let pagination = paginationContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      pagination.getItemProps({
        type: 'page',
        value,
      }),
    ),
  );
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
