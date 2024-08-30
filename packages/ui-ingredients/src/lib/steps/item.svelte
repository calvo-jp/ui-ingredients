<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/steps';
  import type {Snippet} from 'svelte';

  export interface StepsItemProps extends Assign<Omit<HTMLProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext, stepsItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: StepsItemProps = $props();

  let steps = stepsContext.get();

  let [itemProps, otherProps] = createSplitProps<ItemProps>(['index'])(props);

  let itemState = $derived(steps.getItemState(itemProps));

  let mergedProps = $derived(mergeProps(otherProps, steps.getItemProps(itemProps)));

  stepsItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
