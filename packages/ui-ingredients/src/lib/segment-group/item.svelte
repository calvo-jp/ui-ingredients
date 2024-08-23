<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/radio-group';
  import type {Snippet} from 'svelte';

  export interface SegmentGroupItemProps
    extends Assign<Omit<HtmlIngredientProps<'label'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {ensureStyleIsString} from '$lib/utils.js';
  import {mergeProps} from '@zag-js/svelte';
  import {parts} from './anatomy.js';
  import {
    setSegmentGroupItemPropsContext,
    useSegmentGroupContext,
  } from './context.svelte.js';

  let {
    /**/
    value,
    invalid,
    disabled,
    children,
    ...props
  }: SegmentGroupItemProps = $props();

  let context = useSegmentGroupContext();

  let state = $derived(
    context.getItemState({
      value,
      invalid,
      disabled,
    }),
  );

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        value,
        invalid,
        disabled,
      }),
      parts.item.attrs,
    ),
  );

  setSegmentGroupItemPropsContext({
    value,
    invalid,
    disabled,
  });
</script>

<label {...ensureStyleIsString(attrs)}>
  {@render children?.(state)}
</label>
