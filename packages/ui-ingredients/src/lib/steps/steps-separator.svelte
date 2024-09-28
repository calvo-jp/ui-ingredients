<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsSeparatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getStepsContext,
    getStepsItemPropsContext,
  } from './steps-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: StepsSeparatorProps = $props();

  let steps = getStepsContext();
  let itemProps = getStepsItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, steps.getSeparatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
