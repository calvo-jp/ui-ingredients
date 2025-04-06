<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateListboxProps,
    CreateListboxReturn,
  } from './create-listbox.svelte.js';

  export interface ListboxProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateListboxReturn>,
      Optional<CreateListboxProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createListbox} from './create-listbox.svelte.js';
  import {setListboxContext} from './listbox-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ListboxProps = $props();

  let uid = $props.id();

  let [createListboxProps, localProps] = $derived(
    createSplitProps<Omit<CreateListboxProps, 'id'>>([
      'collection',
      'defaultHighlightedValue',
      'defaultValue',
      'deselectable',
      'disabled',
      'disallowSelectAll',
      'highlightedValue',
      'ids',
      'loopFocus',
      'onHighlightChange',
      'onSelect',
      'onValueChange',
      'orientation',
      'scrollToIndexFn',
      'selectOnHighlight',
      'selectionMode',
      'typeahead',
      'value',
    ])(props),
  );

  let listbox = createListbox(
    reflect(() => ({...createListboxProps, id: id ?? uid})),
  );

  let mergedProps = $derived(mergeProps(listbox.getRootProps(), localProps));

  setListboxContext(listbox);
</script>

{#if asChild}
  {@render asChild(mergedProps, listbox)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(listbox)}
  </div>
{/if}
