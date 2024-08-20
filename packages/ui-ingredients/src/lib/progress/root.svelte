<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateProgressContextProps, CreateProgressContextReturn} from './context.svelte.js';

  export interface ProgressProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateProgressContextProps>
    > {
    children?: Snippet<[context: CreateProgressContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createProgressContext, setProgressContext} from './context.svelte.js';

  let {
    id = uuid(),
    ids,
    dir,
    max,
    min,
    value,
    orientation,
    translations,
    getRootNode,
    children,
    ...props
  }: ProgressProps = $props();

  let context = createProgressContext({
    id,
    ids,
    dir,
    max,
    min,
    value: $state.snapshot(value),
    orientation,
    translations,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setProgressContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
