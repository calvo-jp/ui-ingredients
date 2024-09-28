<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/steps';

  export interface StepsContentProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getStepsContext} from './steps-context.svelte.js';

  let {
    ref = $bindable(null),
    index,
    asChild,
    children,
    ...props
  }: StepsContentProps = $props();

  let steps = getStepsContext();

  let mergedProps = $derived(mergeProps(props, steps.getContentProps({index})));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
