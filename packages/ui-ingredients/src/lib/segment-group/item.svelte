<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/radio-group';
  import type {Snippet} from 'svelte';

  export interface SegmentGroupItemProps
    extends Assign<Omit<HtmlIngredientProps<'label'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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
    ),
  );

  setSegmentGroupItemPropsContext({
    value,
    invalid,
    disabled,
  });
</script>

<label {...attrs}>
  {@render children?.(state)}
</label>
