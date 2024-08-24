<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateProgressProps, CreateProgressReturn} from './create-progress.svelte.js';

  export interface ProgressProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateProgressProps> {
    children?: Snippet<[api: CreateProgressReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {progressContext} from './context.svelte.js';
  import {createProgress} from './create-progress.svelte.js';

  let {
    /**/
    id,
    ids,
    max,
    min,
    value,
    orientation,
    translations,
    children,
    ...props
  }: ProgressProps = $props();

  let context = createProgress({
    id,
    ids,
    max,
    min,
    value: $state.snapshot(value),
    orientation,
    translations,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  progressContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
