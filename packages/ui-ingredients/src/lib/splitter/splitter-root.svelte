<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateSplitterProps,
    CreateSplitterReturn,
  } from './create-splitter.svelte.js';

  export interface SplitterProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateSplitterReturn>,
      Optional<CreateSplitterProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createSplitter} from './create-splitter.svelte.js';
  import {setSplitterContext} from './splitter-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SplitterProps = $props();

  let uid = $props.id();

  let [createSplitterProps, localProps] = $derived(
    createSplitProps<Omit<CreateSplitterProps, 'id'>>([
      'defaultSize',
      'ids',
      'keyboardResizeBy',
      'nonce',
      'onCollapse',
      'onExpand',
      'onResize',
      'onResizeEnd',
      'onResizeStart',
      'orientation',
      'panels',
      'size',
    ])(props),
  );

  let splitter = createSplitter(
    reflect(() => ({...createSplitterProps, id: id ?? uid})),
  );

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
