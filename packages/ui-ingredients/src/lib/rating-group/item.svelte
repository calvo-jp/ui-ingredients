<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/rating-group';
  import type {Snippet} from 'svelte';

  export interface RatingGroupItemProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {ratingGroupContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: RatingGroupItemProps = $props();

  let ratingGroup = ratingGroupContext.get();

  let itemState = $derived(ratingGroup.getItemState({index}));
  let mergedProps = $derived(mergeProps(props, ratingGroup.getItemProps({index})));
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children(itemState)}
  </div>
{/if}
