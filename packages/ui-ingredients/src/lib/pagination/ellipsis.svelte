<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {EllipsisProps} from '@zag-js/pagination';

  export interface PaginationEllipsisProps extends Assign<HTMLProps<'span'>, EllipsisProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {paginationContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: PaginationEllipsisProps = $props();

  let pagination = paginationContext.get();

  let mergedProps = $derived(mergeProps(props, pagination.getEllipsisProps({index})));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
