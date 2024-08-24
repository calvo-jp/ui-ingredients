<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/radio-group';
  import type {Snippet} from 'svelte';

  export interface SegmentGroupItemProps
    extends Assign<Omit<HtmlProps<'label'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {ensureStyleIsString} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {parts} from './anatomy.js';
  import {segmentGroupContext, segmentGroupItemPropsContext} from './context.svelte.js';

  let {
    /**/
    value,
    invalid,
    disabled,
    children,
    ...props
  }: SegmentGroupItemProps = $props();

  let context = segmentGroupContext.get();

  let itemProps = $derived({
    value,
    invalid,
    disabled,
  });

  let state = $derived(context.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, context.getItemProps(itemProps), parts.item.attrs));

  segmentGroupItemPropsContext.set(() => itemProps);
</script>

<label {...ensureStyleIsString(attrs)}>
  {@render children?.(state)}
</label>
