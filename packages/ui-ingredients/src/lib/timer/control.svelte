<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimerControlProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimerContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TimerControlProps = $props();

  let timer = getTimerContext();

  let mergedProps = $derived(mergeProps(props, timer.getControlProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
