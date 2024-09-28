<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateStepsProps,
    CreateStepsReturn,
  } from './create-steps.svelte.js';

  export interface StepsProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateStepsReturn>,
      CreateStepsProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createSteps} from './create-steps.svelte.js';
  import {setStepsContext} from './steps-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: StepsProps = $props();

  let [createStepsProps, localProps] = $derived(
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

  let steps = createSteps(reflect(() => createStepsProps));

  let mergedProps = $derived(mergeProps(steps.getRootProps(), localProps));

  setStepsContext(steps);
</script>

{#if asChild}
  {@render asChild(mergedProps, steps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(steps)}
  </div>
{/if}
