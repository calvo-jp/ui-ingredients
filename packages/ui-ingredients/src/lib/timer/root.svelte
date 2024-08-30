<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateTimerProps,
    CreateTimerReturn,
  } from './create-timer.svelte.js';

  export interface TimerProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateTimerProps> {
    asChild?: AsChild<CreateTimerReturn>;
    children?: Snippet<[CreateTimerReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {timerContext} from './context.svelte.js';
  import {createTimer} from './create-timer.svelte.js';

  let {asChild, children, ...props}: TimerProps = $props();

  let [timerProps, otherProps] = $derived(
    createSplitProps<CreateTimerProps>([
      'id',
      'startMs',
      'targetMs',
      'interval',
      'autoStart',
      'countdown',
      'onTick',
      'onComplete',
    ])(props),
  );

  let timer = createTimer(timerProps);

  let mergedProps = $derived(mergeProps(otherProps, timer.getRootProps()));

  timerContext.set(timer);
</script>

{#if asChild}
  {@render asChild(mergedProps, timer)}
{:else}
  <div {...mergedProps}>
    {@render children?.(timer)}
  </div>
{/if}
