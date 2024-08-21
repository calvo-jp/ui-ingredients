<script lang="ts" context="module">
  import type {Assign, HtmlIngredientsProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/pagination';

  export interface PaginationItemProps
    extends Assign<HtmlIngredientsProps<'button'>, Omit<ItemProps, 'type'>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePaginationContext} from './context.svelte.js';

  let {value, children, ...props}: PaginationItemProps = $props();

  let context = usePaginationContext();

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        type: 'page',
        value,
      }),
    ),
  );
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
