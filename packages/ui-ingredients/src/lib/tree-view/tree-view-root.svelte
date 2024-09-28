<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateTreeViewProps,
    CreateTreeViewReturn,
  } from './create-tree-view.svelte.js';

  export interface TreeViewProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateTreeViewReturn>,
        CreateTreeViewProps
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {setPresenceStrategyPropsContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createTreeView} from './create-tree-view.svelte.js';
  import {setTreeViewContext} from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewProps = $props();

  let [presenceStrategyProps, rest] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let [createTreeViewProps, localProps] = $derived(
    createSplitProps<CreateTreeViewProps>([
      'id',
      'ids',
      'typeahead',
      'focusedValue',
      'expandedValue',
      'expandOnClick',
      'selectedValue',
      'selectionMode',
      'onFocusChange',
      'onExpandedChange',
      'onSelectionChange',
    ])(rest),
  );

  let treeView = createTreeView(reflect(() => createTreeViewProps));
  let mergedProps = $derived(mergeProps(treeView.getRootProps(), localProps));

  setTreeViewContext(treeView);
  setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, treeView)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(treeView)}
  </div>
{/if}
