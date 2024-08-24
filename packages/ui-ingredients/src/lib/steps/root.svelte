<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateStepsProps, CreateStepsReturn} from './create-steps.svelte.js';

  export interface StepsProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, Omit<CreateStepsProps, 'id'>> {
    children?: Snippet<[api: CreateStepsReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {stepsContext} from './context.svelte.js';
  import {createSteps} from './create-steps.svelte.js';

  let {
    id,
    ids,
    dir,
    step,
    count,
    linear,
    orientation,
    onStepChange,
    onStepComplete,
    getRootNode,
    children,
    ...props
  }: StepsProps = $props();

  let localeContext = getLocaleContext();

  let uid = createUniqueId();

  let context = createSteps({
    id: id ?? uid,
    ids,
    dir: dir ?? localeContext?.dir,
    step,
    count,
    linear,
    orientation,
    onStepChange,
    onStepComplete,
    getRootNode: getRootNode ?? getEnvironmentContext()?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  stepsContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
