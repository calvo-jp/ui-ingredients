<script lang="ts" module>
  import type {ItemProps} from '@zag-js/timer';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface TimerItemProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {
    getTimerContext,
    setTimerItemPropsContext,
  } from './timer-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TimerItemProps = $props();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['type'])(props),
  );

  let timer = getTimerContext();
  let mergedProps = $derived(
    mergeProps(timer.getItemProps(itemProps), localProps),
  );

  setTimerItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
