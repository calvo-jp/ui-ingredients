<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/pagination';

  export interface PaginationItemProps
    extends Assign<HtmlIngredientProps<'button'>, Omit<ItemProps, 'type'>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {paginationContext} from './context.svelte.js';

  let {value, children, ...props}: PaginationItemProps = $props();

  let context = paginationContext.get();

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
