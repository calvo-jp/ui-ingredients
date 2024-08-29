<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/timer';

  export interface TimerItemProps extends Assign<HTMLProps<'div'>, ItemProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timerContext, timerItemPropsContext} from './context.svelte.js';

  let {type, asChild, children, ...props}: TimerItemProps = $props();

  let timer = timerContext.get();
  let itemProps = $derived({
    type,
  });

  let attrs = $derived(mergeProps(props, timer.getItemProps(itemProps)));

  timerItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
