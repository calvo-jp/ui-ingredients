<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface TimerSeparatorProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timerContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimerSeparatorProps = $props();

  let timer = timerContext.get();

  let attrs = $derived(mergeProps(props, timer.getSeparatorProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
