<script lang="ts" context="module">
  import type {Assign, WithoutChildren} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/rating-group';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface RatingGroupItemProps
    extends Assign<WithoutChildren<SvelteHTMLElements['div']>, ItemProps> {
    children: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useRatingGroupContext} from './context.svelte.js';

  let {index, children, ...props}: RatingGroupItemProps = $props();

  let context = useRatingGroupContext();

  let state = $derived(context.getItemState({index}));

  let attrs = $derived(mergeProps(props, context.getItemProps({index})));
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
