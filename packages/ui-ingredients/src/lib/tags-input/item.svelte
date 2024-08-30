<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/tags-input';
  import type {Snippet} from 'svelte';

  export interface TagsInputItemProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {
    tagsInputContext,
    tagsInputItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: TagsInputItemProps = $props();

  let tagsInput = tagsInputContext.get();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['index', 'value', 'disabled'])(props),
  );

  let itemState = $derived(tagsInput.getItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(otherProps, tagsInput.getItemProps(itemProps)),
  );

  tagsInputItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
