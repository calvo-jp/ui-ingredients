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
  import {getTimerContext} from './context.svelte.js';

  let {
    this: e,
    action,
    asChild,
    children,
    ...props
  }: TimerActionTriggerProps = $props();

  let timer = getTimerContext();

  let mergedProps = $derived(
    mergeProps(props, timer.getActionTriggerProps({action})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
