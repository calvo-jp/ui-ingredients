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
  import {getPaginationContext} from './context.svelte.js';

  let {
    this: e,
    index,
    asChild,
    children,
    ...props
  }: PaginationEllipsisProps = $props();

  let pagination = getPaginationContext();

  let mergedProps = $derived(
    mergeProps(props, pagination.getEllipsisProps({index})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
