<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/tags-input';

  export interface TagsInputItemProps
    extends Assign<HtmlIngredientProps<'div', ItemState>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getTagsInputContext,
    setTagsInputItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: TagsInputItemProps = $props();

  let tagsInput = getTagsInputContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['index', 'value', 'disabled'])(props),
  );

  let itemState = $derived(tagsInput.getItemState(itemProps));

  let mergedProps = $derived(
    mergeProps(localProps, tagsInput.getItemProps(itemProps)),
  );

  setTagsInputItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
