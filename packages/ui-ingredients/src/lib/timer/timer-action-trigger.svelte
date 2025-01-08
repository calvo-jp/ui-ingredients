<script lang="ts" module>
  import type {ActionTriggerProps} from '@zag-js/timer';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface TimerActionTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      ActionTriggerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTimerContext} from './timer-context.svelte.js';

  let {
    ref = $bindable(null),
    action,
    asChild,
    children,
    ...props
  }: TimerActionTriggerProps = $props();

  let timer = getTimerContext();
  let mergedProps = $derived(
    mergeProps(timer.getActionTriggerProps({action}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
