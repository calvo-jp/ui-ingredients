<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TimerItemValueProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getTimerContext,
    getTimerItemPropsContext,
  } from './timer-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TimerItemValueProps = $props();

  let timer = getTimerContext();
  let itemProps = getTimerItemPropsContext();
  let mergedProps = $derived(
    mergeProps(timer.getItemValueProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {timer.formattedTime[itemProps.type]}
    {/if}
  </div>
{/if}
