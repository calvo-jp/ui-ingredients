<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ActionTriggerProps} from '@zag-js/timer';

  export interface TimerActionTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      ActionTriggerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
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
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
