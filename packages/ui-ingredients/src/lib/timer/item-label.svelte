<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface TimerItemLabelProps extends Assign<SvelteHTMLElements['span'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTimerContext, useTimerItemContext} from './context.svelte.js';

  let {children, ...props}: TimerItemLabelProps = $props();

  let context = useTimerContext();
  let itemContext = useTimerItemContext();

  let attrs = $derived(mergeProps(props, context.getItemLabelProps(itemContext)));
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.formattedTime[itemContext.type]}
  {/if}
</span>
