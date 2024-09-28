<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimerItemValueProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
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
  }: TimerItemValueProps = $props();

  let timer = getTimerContext();
  let itemProps = getTimerItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, timer.getItemValueProps(itemProps)),
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
