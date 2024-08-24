<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateStepsProps, CreateStepsReturn} from './create-steps.svelte.js';

  export interface StepsProps extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateStepsProps> {
    children?: Snippet<[api: CreateStepsReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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
    children,
    ...props
  }: StepsProps = $props();

  let context = createSteps({
    id,
    ids,
    step,
    count,
    linear,
    orientation,
    onStepChange,
    onStepComplete,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  stepsContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
