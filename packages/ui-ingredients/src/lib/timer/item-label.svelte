<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TimerItemLabelProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timerContext, timerItemPropsContext} from './context.svelte.js';

  let {children, ...props}: TimerItemLabelProps = $props();

  let timer = timerContext.get();
  let itemProps = timerItemPropsContext.get();

  let attrs = $derived(mergeProps(props, timer.getItemLabelProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
