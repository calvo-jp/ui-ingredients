<script lang="ts" module>
  import type {ItemProps, ItemState} from '@zag-js/tags-input';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface TagsInputItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {
    getTagsInputContext,
    setTagsInputItemPropsContext,
  } from './tags-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TagsInputItemProps = $props();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['index', 'value', 'disabled'])(props),
  );

  let tagsInput = getTagsInputContext();
  let itemState = $derived(tagsInput.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(tagsInput.getItemProps(itemProps), localProps),
  );

  setTagsInputItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
