<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateProgressProps,
    CreateProgressReturn,
  } from './create-progress.svelte.js';

  export interface ProgressProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateProgressProps> {
    asChild?: AsChild;
    children?: Snippet<[progress: CreateProgressReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {progressContext} from './context.svelte.js';
  import {createProgress} from './create-progress.svelte.js';

  let {asChild, children, ...props}: ProgressProps = $props();

  let [progressProps, otherProps] = $derived(
    createSplitProps<CreateProgressProps>([
      'id',
      'ids',
      'max',
      'min',
      'value',
      'orientation',
      'translations',
    ])(props),
  );

  let progress = createProgress(progressProps);

  let mergedProps = $derived(mergeProps(otherProps, progress.getRootProps()));

  progressContext.set(progress);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.(progress)}
  </div>
{/if}
