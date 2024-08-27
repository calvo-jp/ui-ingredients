<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTimerProps, CreateTimerReturn} from './create-timer.svelte.js';

  export interface TimerProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateTimerProps> {
    children?: Snippet<[timer: CreateTimerReturn]>;
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

  let attrs = $derived(mergeProps(props, timer.getRootProps()));

  timerContext.set(timer);
</script>

<div {...attrs}>
  {@render children?.(timer)}
</div>
