<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/radio-group';
  import type {Snippet} from 'svelte';

  export interface RadioGroupItemProps
    extends Assign<Omit<HtmlProps<'label'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {radioGroupContext, radioGroupItemPropsContext} from './context.svelte.js';

  let {
    /**/
    value,
    invalid,
    disabled,
    children,
    ...props
  }: RadioGroupItemProps = $props();

  let context = radioGroupContext.get();

  let itemProps = $derived({
    value,
    invalid,
    disabled,
  });

  let state = $derived(context.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, context.getItemProps(itemProps)));

  radioGroupItemPropsContext.set(() => itemProps);
</script>

<label {...attrs}>
  {@render children?.(state)}
</label>
