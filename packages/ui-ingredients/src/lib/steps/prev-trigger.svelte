<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsPrevTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getStepsContext} from './context.svelte.js';

  let {asChild, children, ...props}: StepsPrevTriggerProps = $props();

  let steps = getStepsContext();

  let mergedProps = $derived(mergeProps(props, steps.getPrevTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
