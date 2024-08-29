<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/steps';
  import type {Snippet} from 'svelte';

  export interface StepsItemProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<GenericHtmlProps, ItemState>;
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext, stepsItemPropsContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: StepsItemProps = $props();

  let steps = stepsContext.get();
  let itemProps = $derived({
    index,
  });

  let state = $derived(steps.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, steps.getItemProps(itemProps)));

  stepsItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <div {...attrs}>
    {@render children?.(state)}
  </div>
{/if}
