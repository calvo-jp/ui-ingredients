<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TimerItemValueProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timerContext, timerItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TimerItemValueProps = $props();

  let timer = timerContext.get();
  let itemProps = timerItemPropsContext.get();

  let attrs = $derived(mergeProps(props, timer.getItemValueProps(itemProps)));
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {timer.formattedTime[itemProps.type]}
  {/if}
</span>
