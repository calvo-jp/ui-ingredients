<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateStepsProps,
    CreateStepsReturn,
  } from './create-steps.svelte.js';

  export interface StepsProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateStepsProps> {
    asChild?: AsChild<CreateStepsReturn>;
    children?: Snippet<[CreateStepsReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {stepsContext} from './context.svelte.js';
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

  let steps = createSteps(stepsProps);

  let mergedProps = $derived(mergeProps(otherProps, steps.getRootProps()));

  stepsContext.set(steps);
</script>

{#if asChild}
  {@render asChild(mergedProps, steps)}
{:else}
  <div {...mergedProps}>
    {@render children?.(steps)}
  </div>
{/if}
