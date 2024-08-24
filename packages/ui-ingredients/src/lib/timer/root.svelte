<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTimerProps, CreateTimerReturn} from './create-timer.svelte.js';

  export interface TimerProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, Omit<CreateTimerProps, 'id'>> {
    children?: Snippet<[api: CreateTimerReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
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
    getRootNode,
    children,
    ...props
  }: TimerProps = $props();

  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createTimer({
    id: id ?? uid,
    startMs,
    targetMs,
    interval,
    autoStart,
    countdown,
    onTick,
    onComplete,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  timerContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
