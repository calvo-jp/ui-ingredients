<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/steps';

  export interface StepsContentProps
    extends Assign<HtmlIngredientProps<'div'>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getStepsContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: StepsContentProps = $props();

  let steps = getStepsContext();

  let mergedProps = $derived(mergeProps(props, steps.getContentProps({index})));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
