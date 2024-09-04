<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimerItemLabelProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimerContext, getTimerItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimerItemLabelProps = $props();

  let timer = getTimerContext();
  let itemProps = getTimerItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, timer.getItemLabelProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
