<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/timer';

  export interface TimerItemProps extends Assign<HTMLProps<'div'>, ItemProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {timerContext, timerItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimerItemProps = $props();

  let timer = timerContext.get();

  let [itemProps, otherProps] = createSplitProps<ItemProps>(['type'])(props);

  let mergedProps = $derived(mergeProps(otherProps, timer.getItemProps(itemProps)));

  timerItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
