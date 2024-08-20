<script lang="ts" context="module">
  import type {Assign, SvelteHtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/tags-input';
  import type {Snippet} from 'svelte';

  export interface TagsInputItemProps
    extends Assign<Omit<SvelteHtmlProps<'div'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    setTagsInputItemContext,
    useTagsInputContext,
  } from './context.svelte.js';

  let {index, value, disabled, children, ...props}: TagsInputItemProps =
    $props();

  let context = useTagsInputContext();

  let state = $derived(
    context.getItemState({
      index,
      value,
      disabled,
    }),
  );

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        index,
        value,
        disabled,
      }),
    ),
  );

  setTagsInputItemContext({
    index,
    value,
    disabled,
  });
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
