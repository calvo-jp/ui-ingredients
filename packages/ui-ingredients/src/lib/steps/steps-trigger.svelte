<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getStepsContext,
    getStepsItemPropsContext,
  } from './steps-context.svelte.js';

  let {this: e, asChild, children, ...props}: StepsTriggerProps = $props();

  let steps = getStepsContext();
  let itemProps = getStepsItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, steps.getTriggerProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
