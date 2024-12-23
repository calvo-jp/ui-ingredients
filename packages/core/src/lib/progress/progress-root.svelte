<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateProgressProps,
    CreateProgressReturn,
  } from './create-progress.svelte.js';

  export interface ProgressProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateProgressReturn>,
      CreateProgressProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createProgress} from './create-progress.svelte.js';
  import {setProgressContext} from './progress-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ProgressProps = $props();

  let [createProgressProps, localProps] = $derived(
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

  let progress = createProgress(reflect(() => createProgressProps));

  let mergedProps = $derived(mergeProps(progress.getRootProps(), localProps));

  setProgressContext(progress);
</script>

{#if asChild}
  {@render asChild(mergedProps, progress)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(progress)}
  </div>
{/if}
