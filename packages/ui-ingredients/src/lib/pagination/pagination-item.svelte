<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/pagination';

  export interface PaginationItemProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      Omit<ItemProps, 'type'>
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPaginationContext} from './pagination-context.svelte.js';

  let {
    this: e,
    value,
    asChild,
    children,
    ...props
  }: PaginationItemProps = $props();

  let pagination = getPaginationContext();

  let mergedProps = $derived(
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
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
