<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/rating-group';

  export interface RatingGroupItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getRatingGroupContext} from './rating-group-context.svelte.js';

  let {
    ref = $bindable(null),
    index,
    asChild,
    children,
    ...props
  }: RatingGroupItemProps = $props();

  let ratingGroup = getRatingGroupContext();

  let itemState = $derived(ratingGroup.getItemState({index}));
  let mergedProps = $derived(
    mergeProps(
      {'aria-checked': itemState.checked},
      ratingGroup.getItemProps({index}),
      props,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
