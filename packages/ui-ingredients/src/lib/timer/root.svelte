<script lang="ts" context="module">
  import type {Assign, SvelteHtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateTimerContextProps,
    CreateTimerContextReturn,
  } from './context.svelte.js';

  export interface TimerProps
    extends Assign<
      Omit<SvelteHtmlProps<'div'>, 'children'>,
      Omit<CreateTimerContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateTimerContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createTimerContext, setTimerContext} from './context.svelte.js';

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

  let context = createTimerContext({
    id: id ?? uuid(),
    startMs,
    targetMs,
    interval,
    autoStart,
    countdown,
    onTick,
    onComplete,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setTimerContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
