<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface TimerItemValueProps extends SvelteHtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTimerContext, useTimerItemContext} from './context.svelte.js';

  let {children, ...props}: TimerItemValueProps = $props();

  let context = useTimerContext();
  let itemContext = useTimerItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemValueProps(itemContext)),
  );
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.formattedTime[itemContext.type]}
  {/if}
</span>
