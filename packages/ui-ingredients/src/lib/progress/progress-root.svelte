<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateProgressProps,
    CreateProgressReturn,
  } from './create-progress.svelte.js';

  export interface ProgressProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateProgressReturn>,
      Optional<CreateProgressProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createProgress} from './create-progress.svelte.js';
  import {setProgressContext} from './progress-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: ProgressProps = $props();

  let uid = $props.id();

  let [createProgressProps, localProps] = $derived(
    createSplitProps<Omit<CreateProgressProps, 'id'>>([
      'defaultValue',
      'ids',
      'max',
      'min',
      'onValueChange',
      'orientation',
      'translations',
      'value',
    ])(rest),
  );

  let progress = createProgress(
    reflect(() => ({...createProgressProps, id: id ?? uid})),
  );

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
