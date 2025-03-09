<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateTimerProps,
    CreateTimerReturn,
  } from './create-timer.svelte.js';

  export interface TimerProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateTimerReturn>,
      Optional<CreateTimerProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createTimer} from './create-timer.svelte.js';
  import {setTimerContext} from './timer-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TimerProps = $props();

  let uid = $props.id();

  let [createTimerProps, localProps] = $derived(
    createSplitProps<Omit<CreateTimerProps, 'id'>>([
      'autoStart',
      'countdown',
      'ids',
      'interval',
      'onComplete',
      'onTick',
      'startMs',
      'targetMs',
    ])(props),
  );

  let timer = createTimer(
    reflect(() => ({...createTimerProps, id: id ?? uid})),
  );

  let mergedProps = $derived(mergeProps(timer.getRootProps(), localProps));

  setTimerContext(timer);
</script>

{#if asChild}
  {@render asChild(mergedProps, timer)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(timer)}
  </div>
{/if}
