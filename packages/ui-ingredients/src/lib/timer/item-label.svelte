<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TimerItemLabelProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timerContext, timerItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimerItemLabelProps = $props();

  let timer = timerContext.get();
  let itemProps = timerItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, timer.getItemLabelProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
