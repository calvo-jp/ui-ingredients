<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateTabsProps,
    CreateTabsReturn,
  } from './create-tabs.svelte.js';

  export interface TabsProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateTabsReturn>,
      Optional<CreateTabsProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createTabs} from './create-tabs.svelte.js';
  import {setTabsContext} from './tabs-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TabsProps = $props();

  let uid = $props.id();

  let [createTabsProps, localProps] = $derived(
    createSplitProps<Omit<CreateTabsProps, 'id'>>([
      'activationMode',
      'composite',
      'defaultValue',
      'deselectable',
      'ids',
      'loopFocus',
      'navigate',
      'onFocusChange',
      'onValueChange',
      'orientation',
      'translations',
      'value',
    ])(props),
  );

  let tabs = createTabs(reflect(() => ({...createTabsProps, id: id ?? uid})));

  let mergedProps = $derived(mergeProps(tabs.getRootProps(), localProps));

  setTabsContext(tabs);
</script>

{#if asChild}
  {@render asChild(mergedProps, tabs)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(tabs)}
  </div>
{/if}
