<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimerItemValueProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimerContext, getTimerItemPropsContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TimerItemValueProps = $props();

  let timer = getTimerContext();
  let itemProps = getTimerItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, timer.getItemValueProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {timer.formattedTime[itemProps.type]}
    {/if}
  </div>
{/if}
