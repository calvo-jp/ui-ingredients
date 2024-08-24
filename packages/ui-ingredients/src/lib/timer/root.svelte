<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTimerProps, CreateTimerReturn} from './create-timer.svelte.js';

  export interface TimerProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateTimerProps> {
    children?: Snippet<[api: CreateTimerReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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

  let context = createTimer({
    id,
    startMs,
    targetMs,
    interval,
    autoStart,
    countdown,
    onTick,
    onComplete,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  timerContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
