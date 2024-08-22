<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/steps';
  import type {Snippet} from 'svelte';

  export interface StepsItemProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setStepsItemPropsContext, useStepsContext} from './context.svelte.js';

  let {index, children, ...props}: StepsItemProps = $props();

  let context = useStepsContext();

  let state = $derived(context.getItemState({index}));

  let attrs = $derived(mergeProps(props, context.getItemProps({index})));

  setStepsItemPropsContext({index});
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
