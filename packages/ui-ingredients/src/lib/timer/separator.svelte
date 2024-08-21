<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface TimerSeparatorProps extends HtmlIngredientsProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTimerContext} from './context.svelte.js';

  let {children, ...props}: TimerSeparatorProps = $props();

  let context = useTimerContext();

  let attrs = $derived(mergeProps(props, context.getSeparatorProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
