<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface StepsNextTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getStepsContext} from './steps-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: StepsNextTriggerProps = $props();

  let steps = getStepsContext();
  let mergedProps = $derived(mergeProps(steps.getNextTriggerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
