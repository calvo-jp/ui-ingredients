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
  import {getRatingGroupContext} from './context.svelte.js';

  let {
    this: e,
    index,
    asChild,
    children,
    ...props
  }: RatingGroupItemProps = $props();

  let ratingGroup = getRatingGroupContext();

  let itemState = $derived(ratingGroup.getItemState({index}));
  let mergedProps = $derived(
    mergeProps(props, ratingGroup.getItemProps({index})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
