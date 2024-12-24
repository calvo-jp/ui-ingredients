<script lang="ts" module>
  import type {EllipsisProps} from '@zag-js/pagination';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface PaginationEllipsisProps
    extends Assign<
      HtmlIngredientProps<'span', HTMLSpanElement>,
      EllipsisProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getPaginationContext} from './pagination-context.svelte.js';

  let {
    ref = $bindable(null),
    index,
    asChild,
    children,
    ...props
  }: PaginationEllipsisProps = $props();

  let pagination = getPaginationContext();

  let mergedProps = $derived(
    mergeProps(pagination.getEllipsisProps({index}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      ...
    {/if}
  </span>
{/if}
