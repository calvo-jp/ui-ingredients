<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TimerSeparatorProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {timerContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimerSeparatorProps = $props();

  let timer = timerContext.get();

  let mergedProps = $derived(mergeProps(props, timer.getSeparatorProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
