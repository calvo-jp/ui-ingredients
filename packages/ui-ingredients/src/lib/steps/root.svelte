<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateStepsProps,
    CreateStepsReturn,
  } from './create-steps.svelte.js';

  export interface StepsProps
    extends Assign<
      HtmlIngredientProps<'div', CreateStepsReturn>,
      CreateStepsProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setStepsContext} from './context.svelte.js';
  import {createSteps} from './create-steps.svelte.js';

  let {asChild, children, ...props}: StepsProps = $props();

  let [stepsProps, otherProps] = $derived(
    createSplitProps<CreateStepsProps>([
      'id',
      'ids',
      'step',
      'count',
      'linear',
      'orientation',
      'onStepChange',
      'onStepComplete',
    ])(props),
  );

  let steps = createSteps(reflect(() => stepsProps));

  let mergedProps = $derived(mergeProps(otherProps, steps.getRootProps()));

  setStepsContext(steps);
</script>

{#if asChild}
  {@render asChild(mergedProps, steps)}
{:else}
  <div {...mergedProps}>
    {@render children?.(steps)}
  </div>
{/if}
