<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateTimerProps,
    CreateTimerReturn,
  } from './create-timer.svelte.js';

  export interface TimerProps
    extends Assign<
      HtmlIngredientProps<'div', CreateTimerReturn>,
      CreateTimerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setTimerContext} from './context.svelte.js';
  import {createTimer} from './create-timer.svelte.js';

  let {asChild, children, ...props}: TimerProps = $props();

  let [timerProps, localProps] = $derived(
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

  let timer = createTimer(reflect(() => timerProps));

  let mergedProps = $derived(mergeProps(localProps, timer.getRootProps()));

  setTimerContext(timer);
</script>

{#if asChild}
  {@render asChild(mergedProps, timer)}
{:else}
  <div {...mergedProps}>
    {@render children?.(timer)}
  </div>
{/if}
