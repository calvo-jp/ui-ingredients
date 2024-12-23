<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateTimerProps,
    CreateTimerReturn,
  } from './create-timer.svelte.js';

  export interface TimerProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateTimerReturn>,
      CreateTimerProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createTimer} from './create-timer.svelte.js';
  import {setTimerContext} from './timer-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TimerProps = $props();

  let [createTimerProps, localProps] = $derived(
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

  let timer = createTimer(reflect(() => createTimerProps));

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
