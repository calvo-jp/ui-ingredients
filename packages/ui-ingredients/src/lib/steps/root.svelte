<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateStepsContextProps, CreateStepsContextReturn} from './context.svelte.js';

  export interface StepsProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateStepsContextProps>
    > {
    children?: Snippet<[context: CreateStepsContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createStepsContext, setStepsContext} from './context.svelte.js';

  let {
    id = uuid(),
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
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setStepsContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
