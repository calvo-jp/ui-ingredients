<script lang="ts" module>
  import type {ItemProps} from '@zag-js/pagination';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface PaginationItemProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      Omit<ItemProps, 'type'>
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getPaginationContext} from './pagination-context.svelte.js';

  let {
    ref = $bindable(null),
    value,
    asChild,
    children,
    ...props
  }: PaginationItemProps = $props();

  let pagination = getPaginationContext();
  let mergedProps = $derived(
    mergeProps(pagination.getItemProps({type: 'page', value}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {value}
    {/if}
  </button>
{/if}
