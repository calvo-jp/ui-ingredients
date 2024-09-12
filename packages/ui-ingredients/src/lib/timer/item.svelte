<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/timer';

  export interface TimerItemProps
    extends Assign<HtmlIngredientProps<'div'>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getTimerContext, setTimerItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimerItemProps = $props();

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
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
