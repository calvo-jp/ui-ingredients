<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/pagination';

  export interface PaginationItemProps
    extends Assign<HTMLProps<'button'>, Omit<ItemProps, 'type'>> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {paginationContext} from './context.svelte.js';

  let {value, asChild, children, ...props}: PaginationItemProps = $props();

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

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
