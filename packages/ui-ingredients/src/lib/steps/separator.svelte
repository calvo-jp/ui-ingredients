<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface StepsSeparatorProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getStepsContext, getStepsItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: StepsSeparatorProps = $props();

  let steps = getStepsContext();
  let itemProps = getStepsItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, steps.getSeparatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
