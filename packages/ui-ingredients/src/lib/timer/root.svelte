<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTimerProps, CreateTimerReturn} from './create-timer.svelte.js';

  export interface TimerProps extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateTimerProps> {
    asChild?: AsChild<CreateTimerReturn>;
    children?: Snippet<[CreateTimerReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timerContext} from './context.svelte.js';
  import {createTimer} from './create-timer.svelte.js';

  let {
    id,
    startMs,
    targetMs,
    interval,
    autoStart,
    countdown,
    onTick,
    onComplete,
    asChild,
    children,
    ...props
  }: TimerProps = $props();

  let timer = createTimer({
    id,
    startMs,
    targetMs,
    interval,
    autoStart,
    countdown,
    onTick,
    onComplete,
  });

  let mergedProps = $derived(mergeProps(props, timer.getRootProps()));

  timerContext.set(timer);
</script>

{#if asChild}
  {@render asChild(mergedProps, timer)}
{:else}
  <div {...mergedProps}>
    {@render children?.(timer)}
  </div>
{/if}
