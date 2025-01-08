<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TimerAreaProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTimerContext} from './timer-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TimerAreaProps = $props();

  let timer = getTimerContext();

  let mergedProps = $derived(mergeProps(timer.getAreaProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
