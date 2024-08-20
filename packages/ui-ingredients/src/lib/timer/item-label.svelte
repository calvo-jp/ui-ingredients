<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface TimerItemLabelProps extends SvelteHtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTimerContext, useTimerItemContext} from './context.svelte.js';

  let {children, ...props}: TimerItemLabelProps = $props();

  let context = useTimerContext();
  let itemContext = useTimerItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemLabelProps(itemContext)),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
