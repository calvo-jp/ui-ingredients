<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TimerSeparatorProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timerContext} from './context.svelte.js';

  let {children, ...props}: TimerSeparatorProps = $props();

  let timer = timerContext.get();

  let attrs = $derived(mergeProps(props, timer.getSeparatorProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
