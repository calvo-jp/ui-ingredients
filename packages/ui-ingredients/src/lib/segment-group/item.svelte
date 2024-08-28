<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/radio-group';
  import type {Snippet} from 'svelte';

  export interface SegmentGroupItemProps
    extends Assign<Omit<HtmlProps<'label'>, 'children'>, ItemProps> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'label'>, 'children'>, state: ItemState]>;
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {segmentGroupContext, segmentGroupItemPropsContext} from './context.svelte.js';

  let {
    /**/
    value,
    invalid,
    disabled,
    children,
    asChild,
    ...props
  }: SegmentGroupItemProps = $props();

  let segmentGroup = segmentGroupContext.get();
  let itemProps = $derived({
    value,
    invalid,
    disabled,
  });

  let state = $derived(segmentGroup.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, segmentGroup.getItemProps(itemProps), parts.item.attrs));

  segmentGroupItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <label {...attrs}>
    {@render children?.(state)}
  </label>
{/if}
