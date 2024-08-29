<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface TimerItemValueProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timerContext, timerItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimerItemValueProps = $props();

  let timer = timerContext.get();
  let itemProps = timerItemPropsContext.get();

  let attrs = $derived(mergeProps(props, timer.getItemValueProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {#if children}
      {@render children?.()}
    {:else}
      {timer.formattedTime[itemProps.type]}
    {/if}
  </div>
{/if}
