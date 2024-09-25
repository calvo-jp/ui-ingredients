<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/timer';

  export interface TimerItemProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getTimerContext,
    setTimerItemPropsContext,
  } from './timer-context.svelte.js';

  let {this: e, asChild, children, ...props}: TimerItemProps = $props();

  let timer = getTimerContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['type'])(props),
  );

  let mergedProps = $derived(
    mergeProps(localProps, timer.getItemProps(itemProps)),
  );

  setTimerItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
