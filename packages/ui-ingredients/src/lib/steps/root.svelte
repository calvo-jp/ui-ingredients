<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateStepsContextProps, CreateStepsContextReturn} from './context.svelte.js';

  export interface StepsProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateStepsContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateStepsContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createStepsContext, setStepsContext} from './context.svelte.js';

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

  let context = createStepsContext({
    id: id ?? createUniqueId(),
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

  setStepsContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
