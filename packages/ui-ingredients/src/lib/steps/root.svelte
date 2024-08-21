<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateStepsContextProps,
    CreateStepsContextReturn,
  } from './context.svelte.js';

  export interface StepsProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateStepsContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateStepsContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
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

  let context = createStepsContext({
    id: id ?? uuid(),
    ids,
    dir,
    step,
    count,
    linear,
    orientation,
    onStepChange,
    onStepComplete,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setStepsContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
