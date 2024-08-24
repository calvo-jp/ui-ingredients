<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ActionTriggerProps} from '@zag-js/timer';

  export interface TimerActionTriggerProps
    extends Assign<HtmlProps<'button'>, ActionTriggerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timerContext} from './context.svelte.js';

  let {action, children, ...props}: TimerActionTriggerProps = $props();

  let context = timerContext.get();

  let attrs = $derived(mergeProps(props, context.getActionTriggerProps({action})));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
