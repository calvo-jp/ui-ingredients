<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTimerContextProps, CreateTimerContextReturn} from './context.svelte.js';

  export interface TimerProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateTimerContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateTimerContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
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

  let environmentContext = getEnvironmentContext();

  let context = createTimerContext({
    id: id ?? createUniqueId(),
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

  setTimerContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
