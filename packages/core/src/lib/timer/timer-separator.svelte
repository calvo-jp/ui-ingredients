<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TimerSeparatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTimerContext} from './timer-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TimerSeparatorProps = $props();

  let timer = getTimerContext();

  let mergedProps = $derived(mergeProps(timer.getSeparatorProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
