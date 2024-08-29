<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateStepsProps, CreateStepsReturn} from './create-steps.svelte.js';

  export interface StepsProps extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateStepsProps> {
    asChild?: AsChild<CreateStepsReturn>;
    children?: Snippet<[CreateStepsReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {stepsContext} from './context.svelte.js';
  import {createSteps} from './create-steps.svelte.js';

  let {
    id,
    ids,
    step,
    count,
    linear,
    orientation,
    onStepChange,
    onStepComplete,
    asChild,
    children,
    ...props
  }: StepsProps = $props();

  let steps = createSteps({
    id,
    ids,
    step,
    count,
    linear,
    orientation,
    onStepChange,
    onStepComplete,
  });

  let mergedProps = $derived(mergeProps<Record<string, any>>(props, steps.getRootProps()));

  stepsContext.set(steps);
</script>

{#if asChild}
  {@render asChild(mergedProps, steps)}
{:else}
  <div {...mergedProps}>
    {@render children?.(steps)}
  </div>
{/if}
