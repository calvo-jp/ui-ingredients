<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/rating-group';
  import type {Snippet} from 'svelte';

  export interface RatingGroupItemProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<GenericHtmlProps, ItemState>;
    children: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {ratingGroupContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: RatingGroupItemProps = $props();

  let ratingGroup = ratingGroupContext.get();

  let state = $derived(ratingGroup.getItemState({index}));
  let attrs = $derived(mergeProps(props, ratingGroup.getItemProps({index})));
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <div {...attrs}>
    {@render children(state)}
  </div>
{/if}
