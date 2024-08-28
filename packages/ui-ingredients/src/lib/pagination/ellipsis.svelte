<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {EllipsisProps} from '@zag-js/pagination';
  import type {Snippet} from 'svelte';

  export interface PaginationEllipsisProps extends Assign<HtmlProps<'div'>, EllipsisProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {paginationContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: PaginationEllipsisProps = $props();

  let pagination = paginationContext.get();

  let attrs = $derived(mergeProps(props, pagination.getEllipsisProps({index})));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
