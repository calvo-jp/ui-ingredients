<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimerItemLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
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
    mergeProps(props, timer.getItemLabelProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
