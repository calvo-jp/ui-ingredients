<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {EllipsisProps} from '@zag-js/pagination';

  export interface PaginationEllipsisProps
    extends Assign<
      HtmlIngredientProps<'span', HTMLSpanElement>,
      EllipsisProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
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
