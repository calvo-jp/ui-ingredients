<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateProgressProps,
    CreateProgressReturn,
  } from './create-progress.svelte.js';

  export interface ProgressProps
    extends Assign<
      HtmlIngredientProps<'div', CreateProgressReturn>,
      CreateProgressProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setProgressContext} from './context.svelte.js';
  import {createProgress} from './create-progress.svelte.js';

  let {this: e, asChild, children, ...props}: ProgressProps = $props();

  let [progressProps, localProps] = $derived(
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

  let progress = createProgress(reflect(() => progressProps));

  let mergedProps = $derived(mergeProps(localProps, progress.getRootProps()));

  setProgressContext(progress);
</script>

{#if asChild}
  {@render asChild(mergedProps, progress)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(progress)}
  </div>
{/if}
