<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsNextTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getStepsContext} from './steps-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: StepsNextTriggerProps = $props();

  let steps = getStepsContext();

  let mergedProps = $derived(mergeProps(props, steps.getNextTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
