<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimerControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimerContext} from './timer-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TimerControlProps = $props();

  let timer = getTimerContext();

  let mergedProps = $derived(mergeProps(timer.getControlProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
