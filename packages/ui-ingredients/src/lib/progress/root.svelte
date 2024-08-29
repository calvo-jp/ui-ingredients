<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateProgressProps, CreateProgressReturn} from './create-progress.svelte.js';

  export interface ProgressProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateProgressProps> {
    asChild?: AsChild;
    children?: Snippet<[progress: CreateProgressReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
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
    asChild,
    children,
    ...props
  }: ProgressProps = $props();

  let progress = createProgress({
    id,
    ids,
    max,
    min,
    value: $state.snapshot(value),
    orientation,
    translations,
  });

  let mergedProps = $derived(mergeProps(props, progress.getRootProps()));

  progressContext.set(progress);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.(progress)}
  </div>
{/if}
