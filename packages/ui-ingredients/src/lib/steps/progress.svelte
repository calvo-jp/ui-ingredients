<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsProgressProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getStepsContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: StepsProgressProps = $props();

  let steps = getStepsContext();

  let mergedProps = $derived(mergeProps(props, steps.getProgressProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
