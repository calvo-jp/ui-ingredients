<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsCompletedContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getStepsContext} from './steps-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: StepsCompletedContentProps = $props();

  let steps = getStepsContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      steps.getContentProps({
        index: steps.count,
      }),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
