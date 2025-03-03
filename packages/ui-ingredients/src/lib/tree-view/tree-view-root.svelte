<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateTreeViewProps,
    CreateTreeViewReturn,
  } from './create-tree-view.svelte.js';

  export interface TreeViewProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateTreeViewReturn>,
        Optional<CreateTreeViewProps, 'id'>
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {setPresenceStrategyPropsContext} from '../presence/presence-context.svelte.js';
  import {createTreeView} from './create-tree-view.svelte.js';
  import {setTreeViewContext} from './tree-view-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: TreeViewProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, otherProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(rest),
  );

  let [createTreeViewProps, localProps] = $derived(
    createSplitProps<Omit<CreateTreeViewProps, 'id'>>([
      'collection',
      'defaultExpandedValue',
      'defaultSelectedValue',
      'expandOnClick',
      'expandedValue',
      'focusedValue',
      'ids',
      'onExpandedChange',
      'onFocusChange',
      'onSelectionChange',
      'selectedValue',
      'selectionMode',
      'typeahead',
    ])(otherProps),
  );

  let treeView = createTreeView(
    reflect(() => ({...createTreeViewProps, id: id ?? uid})),
  );

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
