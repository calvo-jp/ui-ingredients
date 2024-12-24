<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateSplitterProps,
    CreateSplitterReturn,
  } from './create-splitter.svelte.js';

  export interface SplitterProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateSplitterReturn>,
      CreateSplitterProps
    > {}
</script>

<script lang="ts">
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createSplitter} from './create-splitter.svelte.js';
  import {setSplitterContext} from './splitter-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SplitterProps = $props();

  let [createSplitterProps, localProps] = $derived(
    createSplitProps<CreateSplitterProps>([
      'id',
      'ids',
      'size',
      'orientation',
      'onSizeChange',
      'onSizeChangeEnd',
    ])(props),
  );

  let splitter = createSplitter(reflect(() => createSplitterProps));

  let mergedProps = $derived(mergeProps(splitter.getRootProps(), localProps));

  setSplitterContext(splitter);
</script>

{#if asChild}
  {@render asChild(mergedProps, splitter)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(splitter)}
  </div>
{/if}
