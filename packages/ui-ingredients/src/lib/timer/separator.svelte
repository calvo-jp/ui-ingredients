<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TimerSeparatorProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timerContext} from './context.svelte.js';

  let {children, ...props}: TimerSeparatorProps = $props();

  let context = timerContext.get();

  let attrs = $derived(mergeProps(props, context.getSeparatorProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
