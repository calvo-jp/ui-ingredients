<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ActionTriggerProps} from '@zag-js/timer';

  export interface TimerActionTriggerProps
    extends Assign<HTMLProps<'button'>, ActionTriggerProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {timerContext} from './context.svelte.js';

  let {action, asChild, children, ...props}: TimerActionTriggerProps = $props();

  let timer = timerContext.get();

  let mergedProps = $derived(
    mergeProps(props, timer.getActionTriggerProps({action})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
