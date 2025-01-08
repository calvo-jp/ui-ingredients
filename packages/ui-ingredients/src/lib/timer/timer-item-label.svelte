<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TimerItemLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
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
  }: TimerItemLabelProps = $props();

  let timer = getTimerContext();
  let itemProps = getTimerItemPropsContext();
  let mergedProps = $derived(
    mergeProps(timer.getItemLabelProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
